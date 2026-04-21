import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Google OAuth Client
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.APP_URL || "http://localhost:3000"}/auth/callback`
  );

  // --- API ROUTES ---

  // Endpoint to get Google Auth URL (for the clinic owner to link their account)
  app.get("/api/auth/url", (req, res) => {
    const scopes = ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/userinfo.email"];
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
      prompt: "consent",
    });
    res.json({ url });
  });

  // Callback to handle OAuth code and display refresh token
  app.get(["/auth/callback", "/auth/callback/"], async (req, res) => {
    const { code } = req.query;
    try {
      const { tokens } = await oauth2Client.getToken(code as string);
      console.log("GOOGLE_REFRESH_TOKEN:", tokens.refresh_token);
      
      res.send(`
        <html>
          <body style="font-family: sans-serif; padding: 40px; line-height: 1.6;">
            <h1 style="color: #0d9488;">Conexión Exitosa</h1>
            <p>Se ha generado el token de acceso para tu calendario.</p>
            <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p>Copia este valor y guárdalo en la variable de entorno <strong>GOOGLE_REFRESH_TOKEN</strong> en AI Studio:</p>
              <pre style="word-break: break-all; white-space: pre-wrap; font-weight: bold; color: #1e293b;">${tokens.refresh_token}</pre>
            </div>
            <p style="margin-top: 20px; color: #64748b;">Una vez guardado, el sistema podrá agendar citas automáticamente.</p>
            <button onclick="window.close()" style="background: #0d9488; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: bold;">Cerrar Ventana</button>
          </body>
        </html>
      `);
    } catch (error) {
      console.error("Error during Google OAuth callback:", error);
      res.status(500).send("Error durante la autenticación.");
    }
  });

  // Booking endpoint
  app.post("/api/book", async (req, res) => {
    const { name, phone, service, day, message, email } = req.body;

    try {
      // 1. Google Calendar Integration
      if (process.env.GOOGLE_REFRESH_TOKEN) {
        oauth2Client.setCredentials({
          refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        });

        const calendar = google.calendar({ version: "v3", auth: oauth2Client });
        
        // Construct description
        const eventDescription = `
          Paciente: ${name}
          Teléfono: ${phone}
          Servicio: ${service}
          Mensaje: ${message || "N/A"}
        `;

        // Simplified event (1 hour duration)
        // Note: Real date selection would be better, but we currently use days of week
        // In a real app, 'day' would be a formal Date.
        const event = {
          summary: `Cita Dental: ${name} (${service})`,
          description: eventDescription,
          start: {
            dateTime: new Date().toISOString(), // Fallback or use selected date if available
            timeZone: "America/Lima",
          },
          end: {
            dateTime: new Date(Date.now() + 3600000).toISOString(),
            timeZone: "America/Lima",
          },
        };

        await calendar.events.insert({
          calendarId: "primary",
          requestBody: event,
        });
        console.log("Calendar event created.");
      } else {
        console.warn("GOOGLE_REFRESH_TOKEN missing. Skipping Calendar event creation.");
      }

      // 2. Email Notifications
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const clinicEmail = process.env.CLINIC_EMAIL || "info@modosonrisa.pe";

        // Email to Clinic
        await transporter.sendMail({
          from: `"Modo Sonrisa Web" <${process.env.EMAIL_USER}>`,
          to: clinicEmail,
          subject: `Nueva Reserva: ${name} - ${service}`,
          text: `
            Has recibido una nueva solicitud de reserva:
            - Paciente: ${name}
            - Teléfono: ${phone}
            - Servicio: ${service}
            - Preferencia: ${day}
            - Mensaje: ${message || "Sin mensaje adicional."}
          `,
        });

        // Email to Patient (if provided)
        if (email) {
          await transporter.sendMail({
            from: `"Modo Sonrisa" <${clinicEmail}>`,
            to: email,
            subject: `Confirmación de Solicitud de Cita - Modo Sonrisa`,
            text: `
              Hola ${name},
              Hemos recibido tu solicitud para el servicio de ${service}.
              Día preferido: ${day}
              
              Nuestro equipo se pondrá en contacto contigo pronto por WhatsApp o llamada para confirmar la hora exacta.
              
              ¡Gracias por confiar en nosotros!
              Modo Sonrisa Perú
            `,
          });
        }
        console.log("Emails sent.");
      } else {
         console.warn("EMAIL credentials missing. Skipping email notifications.");
      }

      res.status(200).json({ success: true, message: "Booking processed." });
    } catch (error) {
      console.error("Booking extraction error:", error);
      res.status(500).json({ error: "Failed to process booking." });
    }
  });

  // --- VITE MIDDLEWARE ---

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

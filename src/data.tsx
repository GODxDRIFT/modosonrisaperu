import React from 'react';
import { Smile, CheckCircle2, Star, Calendar, MessageCircle, Heart, Shield, Award, Users } from 'lucide-react';

export const SPECIALTIES = [
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description: "Tratamiento con brackets para recuperar la armonía dental y una correcta posición. Ideal para adolescentes y adultos.",
    fullDescription: "La ortodoncia no es solo una cuestión de estética; es fundamental para la salud funcional de tu mordida. En Modo Sonrisa utilizamos brackets de alta calidad (metálicos, estéticos y autoligantes) para asegurar que tus dientes se alineen de forma segura.",
    benefits: ["Mejora la estética facial", "Facilita la higiene dental", "Previene el desgaste de piezas", "Corrige problemas de mordida"],
    steps: ["Evaluación radiográfica", "Estudio fotográfico", "Colocación de aparatología", "Controles mensuales"],
    icon: <Smile className="text-teal-600" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "implantes",
    title: "Implantes",
    description: "Sustitución de piezas dentarias perdidas mediante implantes rehabilitados de titanio.",
    fullDescription: "Recupera la capacidad de comer, hablar y sonreír con total confianza. Los implantes dentales son raíces artificiales de titanio que se integran al hueso, ofreciendo una solución permanente y natural para la pérdida de piezas dentales.",
    benefits: ["Sustitución permanente", "Protección del hueso maxilar", "Estética 100% natural", "No daña dientes vecinos"],
    steps: ["Planificación tomográfica", "Colocación del implante", "Fase de oseointegración", "Rehabilitación protésica"],
    icon: <CheckCircle2 className="text-blue-600" />,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "odontopediatria",
    title: "Odontopediatría",
    description: "Prevención y tratamiento especializado para la salud oral de niños y adolescentes con mucho cariño.",
    fullDescription: "Creemos que la primera experiencia dental marca el futuro de la salud oral. La Dra. Angela Benites se especializa en brindar un ambiente lúdico y tranquilo donde los niños aprenden a cuidar su sonrisa sin miedo.",
    benefits: ["Ambiente libre de estrés", "Prevención de caries", "Monitoreo del crecimiento", "Educación en higiene"],
    steps: ["Cita de adaptación", "Examen dental preventivo", "Aplicación de flúor/sellantes", "Guía de cepillado"],
    icon: <Smile className="text-amber-600" />,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "rehabilitacion",
    title: "Rehabilitación",
    description: "Devolvemos función y estética mediante prótesis dentales de alta calidad y diseño digital.",
    fullDescription: "Desde coronas hasta prótesis completas, la rehabilitación oral busca devolver la armonía perdida por el paso del tiempo o traumatismos. Utilizamos materiales biocompatibles de última generación como circonio y cerámica.",
    benefits: ["Restauración de la masticación", "Mejora del habla", "Durabilidad extrema", "Materiales biocompatibles"],
    steps: ["Diagnóstico funcional", "Preparación de piezas", "Impresión digital/molde", "Instalación y ajuste"],
    icon: <CheckCircle2 className="text-indigo-600" />,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "estetica",
    title: "Estética Dental",
    description: "Diseño de sonrisa, carillas y blanqueamiento para que luzcas una sonrisa radiante.",
    fullDescription: "Transformamos tu sonrisa analizando tus rasgos faciales únicos. Ofrecemos carillas de porcelana, resinas estéticas y blanqueamiento dental con resultados naturales que realzan tu belleza natural.",
    benefits: ["Sonrisa más blanca", "Corrección de forma y tamaño", "Resultados inmediatos", "Aumento de confianza"],
    steps: ["Análisis de diseño", "Prueba estética (Mock-up)", "Ejecución del tratamiento", "Mantenimiento preventivo"],
    icon: <Star className="text-rose-600" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "cirugia",
    title: "Cirugía Dental",
    description: "Procedimientos como terceras molares y piezas retenidas con técnicas de mínima invasión.",
    fullDescription: "Contamos con el equipo y la experiencia para extracciones complejas y cirugías orales con el menor trauma posible. Nuestro objetivo es una recuperación rápida y sin complicaciones para el paciente.",
    benefits: ["Eliminación de focos de infección", "Prevención de apiñamiento", "Recuperación controlada", "Sedación consciente"],
    steps: ["Evaluación quirúrgica", "Intervención con anestesia", "Cuidados post-operatorios", "Retiro de puntos"],
    icon: <CheckCircle2 className="text-emerald-600" />,
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS = [
  {
    q: "¿Es dolorosa la colocación de implantes?",
    a: "No, utilizamos anestesia local avanzada y técnicas mínimamente invasivas para asegurar que el proceso sea cómodo y prácticamente indoloro."
  },
  {
    q: "¿A qué edad debe ser la primera visita dental de un niño?",
    a: "Recomendamos la primera visita al aparecer el primer diente de leche, generalmente alrededor de los 6 meses a 1 año de edad."
  },
  {
    q: "¿Ofrecen facilidades de pago?",
    a: "Sí, contamos con opciones de pago fraccionado y convenios con tarjetas de crédito (cuotas sin intereses con bancos seleccionados)."
  },
  {
    q: "¿Tienen convenio con aseguradoras?",
    a: "Actualmente trabajamos con convenios directos y reembolsos. Consúltanos por tu seguro específico vía WhatsApp."
  }
];

export const DOCTORS = [
  {
    id: "angela-benites",
    name: "Dra. Angela Benites",
    role: "Especialista en Odontopediatría",
    cop: "COP: 12345",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
    education: [
      "Cirujano Dentista - USMP",
      "Especialidad en Odontopediatría - UNMSM",
      "Diplomado en Ortopedia Maxilar"
    ],
    experience: "Más de 10 años cuidando la sonrisa de los más pequeños.",
    bio: "La Dra. Angela se apasiona por transformar la experiencia dental de los niños. Su enfoque paciente y lúdico permite que los pacientes más pequeños se sientan cómodos y seguros desde su primera visita. Es experta en técnicas de manejo de conducta y prevención de caries en la infancia temprana.",
    specialties: ["Odontopediatría", "Ortopedia Maxilar", "Prevención Infantil"]
  },
  {
    id: "renato-aojalla",
    name: "Dr. Renato Aojalla",
    role: "Especialista en Ortodoncia y Cirugía",
    cop: "COP: 67890",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600",
    education: [
      "Cirujano Dentista - UPCH",
      "Especialidad en Ortodoncia y Ortopedia Maxilar",
      "Maestría en Clínica Estomatológica"
    ],
    experience: "Especialista en casos complejos de alineación y cirugía oral.",
    bio: "El Dr. Renato combina la precisión de la cirugía con el arte de la ortodoncia. Con un enfoque metódico y detallista, ha ayudado a cientos de pacientes a recuperar la funcionalidad y estética de su sonrisa. Se mantiene a la vanguardia de la tecnología digital aplicada a la odontología.",
    specialties: ["Ortodoncia", "Cirugía Oral", "Implantología"]
  }
];

export const REVIEWS = [
  {
    name: "Franco Aojalla",
    text: "Excelente atención y muy profesionales, además el plus de las cuotas sin intereses con BBVA es muy bueno. Recomendadísimos.",
    rating: 5
  },
  {
    name: "Aline Jimenez",
    text: "¡Excelente atención! Súper amables conmigo, mi esposo y mi pequeño. El servicio es excepcional desde la bienvenida.",
    rating: 5
  },
  {
    name: "Renzo De la cruz",
    text: "Muy buena atención, excelente y muy profesionales en todo momento.",
    rating: 5
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "5 Consejos para cuidar los dientes de tus hijos",
    excerpt: "Aprende cómo fomentar hábitos saludables desde una edad temprana para evitar caries.",
    content: `Cuidar la salud dental de los más pequeños es fundamental para asegurar una sonrisa sana en el futuro. Aquí te presentamos 5 consejos clave:
    
    1. **Empieza temprano**: La higiene debe comenzar incluso antes de que aparezca el primer diente, limpiando las encías con una gasa húmeda.
    2. **Usa pasta con flúor**: Desde el primer diente, usa una cantidad mínima de pasta (tamaño de un grano de arroz) para fortalecer el esmalte.
    3. **El cepillado debe ser un juego**: Usa canciones o aplicaciones para que el cepillado no sea una obligación, sino un momento divertido.
    4. **Controla el azúcar**: Limita el consumo de dulces y bebidas azucaradas, especialmente entre comidas.
    5. **Visitas regulares**: No esperes a que haya dolor. Las revisiones preventivas ayudan a detectar problemas antes de que se agraven.`,
    date: "15 Abr, 2024",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "¿Cuándo es necesario usar brackets?",
    excerpt: "Signos clave que indican que tú o tu hijo podrían necesitar un tratamiento de ortodoncia.",
    content: `La ortodoncia no es solo para mejorar la estética, sino también para asegurar una correcta funcionalidad de la mordida. Algunos signos de que podrías necesitar brackets incluyen:
    
    *   **Dientes apiñados**: Cuando no hay suficiente espacio en el maxilar.
    *   **Espacios excesivos**: Huecos entre los dientes que pueden afectar la fonación.
    *   **Mordida abierta o cruzada**: Cuando los dientes superiores e inferiores no encajan correctamente.
    *   **Dificultad para masticar**: Si sientes molestias al comer o ruidos en la mandíbula.
    
    En Modo Sonrisa realizamos un estudio completo con radiografías y modelos 3D para determinar el mejor momento para iniciar el tratamiento.`,
    date: "10 Abr, 2024",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Mitos y realidades sobre los implantes dentales",
    excerpt: "Todo lo que necesitas saber antes de decidirte por un implante dental.",
    content: `Existen muchas dudas sobre los implantes dentales. Aquí desmentimos los mitos más comunes:
    
    *   **Mito: El cuerpo puede rechazar el implante**. Realidad: El titanio es un material biocompatible y el porcentaje de éxito es superior al 98%.
    *   **Mito: Es un procedimiento muy doloroso**. Realidad: Se realiza con anestesia local avanzada y, en la mayoría de los casos, las molestias postoperatorias son menores que una extracción.
    *   **Mito: Los implantes son solo para personas mayores**. Realidad: Cualquier persona que haya terminado su etapa de crecimiento óseo es candidata si tiene buena salud general.
    
    Recuperar una pieza perdida no solo mejora tu sonrisa, sino que evita que el resto de tus dientes se muevan y se pierda masa ósea.`,
    date: "05 Abr, 2024",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
  }
];

export const GALLERY_CASES = [
  { 
    id: 1, 
    type: "ortodoncia", 
    title: "Alineamiento con Brackets Metálicos", 
    before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", 
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 2, 
    type: "estetica", 
    title: "Diseño de Sonrisa & Carillas", 
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", 
    after: "https://images.unsplash.com/photo-1583339734020-2f3b9d62d2d0?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 3, 
    type: "implantes", 
    title: "Rehabilitación Oral Completa", 
    before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", 
    after: "https://images.unsplash.com/photo-1597374024856-42777356038a?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 4, 
    type: "ortodoncia", 
    title: "Ortodoncia Invisible en Adultos", 
    before: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800", 
    after: "https://images.unsplash.com/photo-1441151614309-3012008e8e1c?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 5, 
    type: "estetica", 
    title: "Blanqueamiento Dental Premium", 
    before: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=800", 
    after: "https://images.unsplash.com/photo-1595231712325-9fdee6096803?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    id: 6, 
    type: "implantes", 
    title: "Puente sobre Implantes", 
    before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", 
    after: "https://images.unsplash.com/photo-1542382103-62580a6b7d59?auto=format&fit=crop&q=80&w=800" 
  }
];

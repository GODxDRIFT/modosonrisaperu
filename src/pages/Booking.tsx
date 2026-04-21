import React, { useState } from 'react';
import { PageHero } from '../components/Shared';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, CheckCircle2, MessageCircle, User, Phone, Clipboard, ArrowRight, ArrowLeft, Clock, ShieldCheck, HeartPulse, Smile } from 'lucide-react';
import { SPECIALTIES } from '../data';

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    day: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const validateName = (name: string) => {
    if (!name.trim()) return "El nombre es obligatorio.";
    if (name.trim().length < 5) return "Por favor, ingresa tu nombre completo.";
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) return "El email es obligatorio.";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email inválido.";
    return "";
  };

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\s/g, '');
    if (!cleanPhone) return "El teléfono es obligatorio.";
    if (!/^\d+$/.test(cleanPhone)) return "Ingresa solo números.";
    if (cleanPhone.length < 9) return "El número debe tener al menos 9 dígitos.";
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (name === 'name') setErrors(prev => ({ ...prev, name: validateName(value) }));
    if (name === 'email') setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    if (name === 'phone') setErrors(prev => ({ ...prev, phone: validatePhone(value) }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    if (field === 'name') setErrors(prev => ({ ...prev, name: validateName(formData.name) }));
    if (field === 'email') setErrors(prev => ({ ...prev, email: validateEmail(formData.email) }));
    if (field === 'phone') setErrors(prev => ({ ...prev, phone: validatePhone(formData.phone) }));
  };

  const isStep3Valid = !validateName(formData.name) && !validateEmail(formData.email) && !validatePhone(formData.phone);

  const days = [
    { label: "Lunes", date: "Lun" },
    { label: "Martes", date: "Mar" },
    { label: "Miércoles", date: "Mié" },
    { label: "Jueves", date: "Jue" },
    { label: "Viernes", date: "Vie" },
    { label: "Sábado", date: "Sáb" },
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Call Backend API
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. Also keep WhatsApp as a fallback
      const waMessage = `Hola Modo Sonrisa, mi nombre es ${formData.name}. Quisiera agendar una cita para ${formData.service}. \nPreferido: ${formData.day}\nTeléfono: ${formData.phone}\nEmail: ${formData.email}\nMensaje: ${formData.message}`;
      window.open(`https://wa.me/51989940726?text=${encodeURIComponent(waMessage)}`, '_blank');
      
      setStep(4);
    } catch (error) {
      console.error(error);
      alert("Error al procesar la reserva. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClinicAuth = async () => {
    try {
      const response = await fetch('/api/auth/url');
      const { url } = await response.json();
      window.open(url, '_blank');
    } catch (error) {
      console.error("Auth error:", error);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero 
        title="Tu Nueva Sonrisa Empieza Aquí" 
        subtitle="Reserva tu cita de evaluación en menos de 2 minutos. Rápido, seguro y sin complicaciones." 
      />
      
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.1)] overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
            
            {/* Sidebar Steps */}
            <div className="bg-slate-900 lg:w-96 p-12 text-white flex flex-col justify-between shrink-0 relative overflow-hidden">
               <div className="relative z-10 space-y-12">
                 {[
                   { n: 1, l: "Servicio", i: <Clipboard size={18} /> },
                   { n: 2, l: "Preferencia", i: <Calendar size={18} /> },
                   { n: 3, l: "Tus Datos", i: <User size={18} /> },
                   { n: 4, l: "Status", i: <CheckCircle2 size={18} /> }
                 ].map((s) => (
                   <div key={s.n} className={`flex items-center gap-6 transition-all duration-500 ${step < s.n ? 'opacity-30' : 'opacity-100'}`}>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 ${step === s.n ? 'bg-teal-500 text-slate-900 scale-110 shadow-[0_0_30px_rgba(20,184,166,0.3)]' : 'bg-white/10'}`}>
                        {s.i}
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-400 block mb-1">Paso 0{s.n}</span>
                        <span className="text-xs font-black uppercase tracking-[0.2em]">{s.l}</span>
                      </div>
                   </div>
                 ))}
               </div>
               
               <div className="hidden lg:block pt-16 border-t border-white/10 relative z-10">
                  <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Datos Protegidos</p>
                        <p className="text-[10px] text-slate-500 font-medium tracking-wide">Cumplimos con la ley de protección de datos.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                        <HeartPulse size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold">Compromiso Real</p>
                        <p className="text-[10px] text-slate-500 font-medium tracking-wide">Atención personalizada por especialistas.</p>
                      </div>
                    </div>
                  </div>
               </div>

               <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -z-0" />
            </div>

            {/* Form Content */}
            <div className="flex-grow p-10 lg:p-24 relative min-h-[650px] flex flex-col bg-white">
               <AnimatePresence mode="wait">
                 {step === 1 && (
                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex-grow">
                      <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">¿Qué tratamiento buscas?</h3>
                      <p className="text-slate-500 mb-12 font-medium text-lg leading-relaxed">Selecciona la especialidad para asignarte con el profesional adecuado.</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                         {SPECIALTIES.concat([{ id: 'otro', title: 'Otro / Consulta General', description: 'Evaluación rápida de salud oral.', icon: <CheckCircle2 className="text-slate-400" /> } as any]).map(s => (
                           <button 
                             key={s.id} 
                             onClick={() => { setFormData({...formData, service: s.title}); handleNext(); }}
                             className={`p-8 rounded-[2.5rem] text-left transition-all border-2 flex flex-col justify-between h-56 group ${formData.service === s.title ? 'border-teal-500 bg-teal-50/50' : 'border-slate-50 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200'}`}
                           >
                             <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110 ${formData.service === s.title ? 'bg-teal-500 text-white' : 'bg-white text-teal-600'}`}>
                               {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
                             </div>
                             <div>
                               <h4 className={`text-lg font-extrabold mb-2 ${formData.service === s.title ? 'text-teal-900' : 'text-slate-900'}`}>{s.title}</h4>
                               <p className="text-xs text-slate-400 font-bold leading-relaxed line-clamp-2 uppercase tracking-widest">{s.description}</p>
                             </div>
                           </button>
                         ))}
                      </div>
                   </motion.div>
                 )}

                 {step === 2 && (
                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex-grow">
                      <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">Preferencia de Horario</h3>
                      <p className="text-slate-500 mb-12 font-medium text-lg">¿Qué día te gustaría ser atendido? (Sujeto a disponibilidad).</p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
                         {days.map(d => (
                            <button
                               key={d.date}
                               onClick={() => setFormData({...formData, day: d.label})}
                               className={`p-8 rounded-3xl text-center transition-all border-2 ${formData.day === d.label ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-50 bg-slate-50 hover:border-slate-200'}`}
                            >
                               <span className="block text-3xl font-black mb-2">{d.date}</span>
                               <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{d.label}</span>
                            </button>
                         ))}
                      </div>

                      <div className="bg-slate-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center gap-10">
                        <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0">
                           <Clock className="text-teal-500" size={32} />
                        </div>
                        <div>
                           <p className="text-xl font-extrabold mb-2">Horarios de Atención</p>
                           <p className="text-slate-400 font-medium">Lunes a Viernes (9:00 AM - 8:00 PM) <br className="hidden md:block" /> Sábados (9:00 AM - 3:00 PM)</p>
                        </div>
                      </div>

                       <div className="flex gap-4 pt-16">
                          <button onClick={handlePrev} className="px-10 py-5 text-slate-400 hover:text-slate-900 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 transition-all">
                             <ArrowLeft size={16} /> Volver
                          </button>
                          <button 
                            disabled={!formData.day}
                            onClick={handleNext} 
                            className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest ml-auto hover:bg-teal-600 transition-all shadow-2xl shadow-teal-500/20 disabled:opacity-30"
                          >
                             Continuar <ArrowRight size={16} className="inline ml-3" />
                          </button>
                       </div>
                   </motion.div>
                 )}

                 {step === 3 && (
                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex-grow space-y-12">
                       <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">Completa tus Datos</h3>
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className={`text-[10px] font-black uppercase tracking-widest ml-1 transition-colors ${touched.name && errors.name ? 'text-red-500' : 'text-teal-600'}`}>Tu Nombre Completo</label>
                             <div className="relative">
                               <input 
                                 type="text" 
                                 name="name"
                                 value={formData.name}
                                 onChange={handleInputChange}
                                 onBlur={() => handleBlur('name')}
                                 className={`w-full p-6 pl-14 rounded-2xl border-2 transition-all font-bold text-slate-800 placeholder:text-slate-300 outline-none ${touched.name && errors.name ? 'border-red-200 bg-red-50 focus:border-red-400' : 'border-transparent bg-slate-50 focus:border-teal-500 focus:bg-white'}`}
                                 placeholder="Ej. Juan Pérez"
                               />
                               <User size={20} className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${touched.name && errors.name ? 'text-red-300' : 'text-slate-300'}`} />
                             </div>
                             <AnimatePresence>
                               {touched.name && errors.name && (
                                 <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[10px] font-bold text-red-500 ml-1">
                                   {errors.name}
                                 </motion.p>
                               )}
                             </AnimatePresence>
                          </div>
                          <div className="space-y-3">
                             <label className={`text-[10px] font-black uppercase tracking-widest ml-1 transition-colors ${touched.email && errors.email ? 'text-red-500' : 'text-teal-600'}`}>Tu Correo Electrónico</label>
                             <div className="relative">
                               <input 
                                 type="email" 
                                 name="email"
                                 value={formData.email}
                                 onChange={handleInputChange}
                                 onBlur={() => handleBlur('email')}
                                 className={`w-full p-6 pl-14 rounded-2xl border-2 transition-all font-bold text-slate-800 placeholder:text-slate-300 outline-none ${touched.email && errors.email ? 'border-red-200 bg-red-50 focus:border-red-400' : 'border-transparent bg-slate-50 focus:border-teal-500 focus:bg-white'}`}
                                 placeholder="Ej. juan@correo.com"
                               />
                               <MessageCircle size={20} className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${touched.email && errors.email ? 'text-red-300' : 'text-slate-300'}`} />
                             </div>
                             <AnimatePresence>
                               {touched.email && errors.email && (
                                 <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[10px] font-bold text-red-500 ml-1">
                                   {errors.email}
                                 </motion.p>
                               )}
                             </AnimatePresence>
                          </div>
                       </div>
                       <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className={`text-[10px] font-black uppercase tracking-widest ml-1 transition-colors ${touched.phone && errors.phone ? 'text-red-500' : 'text-teal-600'}`}>Tu WhatsApp / Celular</label>
                             <div className="relative">
                               <input 
                                 type="tel" 
                                 name="phone"
                                 value={formData.phone}
                                 onChange={handleInputChange}
                                 onBlur={() => handleBlur('phone')}
                                 className={`w-full p-6 pl-14 rounded-2xl border-2 transition-all font-bold text-slate-800 placeholder:text-slate-300 outline-none ${touched.phone && errors.phone ? 'border-red-200 bg-red-50 focus:border-red-400' : 'border-transparent bg-slate-50 focus:border-teal-500 focus:bg-white'}`}
                                 placeholder="Ej. 989 940 726"
                               />
                               <Phone size={20} className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${touched.phone && errors.phone ? 'text-red-300' : 'text-slate-300'}`} />
                             </div>
                             <AnimatePresence>
                               {touched.phone && errors.phone && (
                                 <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[10px] font-bold text-red-500 ml-1">
                                   {errors.phone}
                                 </motion.p>
                               )}
                             </AnimatePresence>
                          </div>
                          <div className="space-y-3 flex flex-col justify-center">
                             <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest leading-loose">
                               Al enviar, recibirás una copia en tu email y agendaremos preliminarmente en nuestro calendario.
                             </p>
                          </div>
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-teal-600 ml-1">¿Tienes alguna duda o molestia específica?</label>
                          <textarea 
                             name="message"
                             value={formData.message}
                             onChange={handleInputChange}
                             className="w-full p-8 bg-slate-50 rounded-[2.5rem] border-2 border-transparent focus:border-teal-500 focus:bg-white transition-all font-bold text-slate-800 placeholder:text-slate-300 min-h-[120px] outline-none"
                             placeholder="Escribe aquí tus comentarios..."
                          />
                       </div>
                       <div className="flex gap-4 pt-4 items-center">
                          <button onClick={handlePrev} className="px-10 py-5 text-slate-400 hover:text-slate-900 font-black uppercase text-[10px] tracking-widest flex items-center gap-3 transition-all">
                             <ArrowLeft size={16} /> Volver
                          </button>
                          <button 
                            disabled={!isStep3Valid || isSubmitting}
                            onClick={handleSubmit} 
                            className="bg-teal-500 text-slate-900 px-12 py-6 rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest ml-auto hover:bg-slate-900 hover:text-white transition-all shadow-2xl shadow-teal-500/30 flex items-center gap-4 disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                          >
                             {isSubmitting ? 'Procesando...' : 'Solicitar Cita Ahora'} <MessageCircle size={18} />
                          </button>
                       </div>
                       
                       <div className="pt-8 border-t border-slate-50 flex justify-center">
                          <button onClick={handleClinicAuth} className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 hover:text-teal-600 transition-colors">
                            Conectar Calendario Clínica (Solo Admin)
                          </button>
                       </div>
                   </motion.div>
                 )}

                 {step === 4 && (
                   <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center text-center py-10 space-y-10">
                      <div className="relative">
                         <div className="w-32 h-32 bg-teal-100 text-teal-600 rounded-[3rem] rotate-12 flex items-center justify-center shadow-2xl shadow-teal-500/20 relative z-10">
                            <Smile size={64} />
                         </div>
                         <div className="absolute inset-0 bg-teal-500 rounded-[3rem] blur-2xl opacity-20 -z-0 animate-pulse" />
                      </div>
                      <div>
                         <h3 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">¡Casi Listo, {formData.name.split(' ')[0]}!</h3>
                         <p className="text-xl text-slate-500 font-medium max-w-sm mx-auto leading-relaxed">
                            Hemos abierto una ventana de chat en WhatsApp con tu solicitud. <br/><br/>
                            <span className="text-slate-900 font-bold">Por favor, presiona "Enviar" en WhatsApp para que podamos agendarte.</span>
                         </p>
                      </div>
                      <div className="h-px bg-slate-100 w-full max-w-xs" />
                      <button onClick={() => setStep(1)} className="px-12 py-5 border-2 border-slate-900 text-slate-900 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all">
                        Realizar otra consulta
                      </button>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
             {[
               { t: "Garantía de Satisfacción", d: "Tratamiento enfocado en resultados reales.", i: <CheckCircle2 className="text-teal-500" /> },
               { t: "Ambiente Seguro", d: "Protocolos de bioseguridad certificados.", i: <ShieldCheck className="text-teal-500" /> },
               { t: "Tecnología Digital", d: "Diagnósticos precisos con equipos modernos.", i: <Clock className="text-teal-500" /> }
             ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                   <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      {item.i}
                   </div>
                   <div>
                      <h4 className="font-extrabold text-slate-900 mb-1">{item.t}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -z-10 skew-x-12 translate-x-1/2" />
      </section>
    </div>
  );
};

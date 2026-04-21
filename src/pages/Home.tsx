import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, MessageCircle, Star, Phone, MapPin, Clock, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPECIALTIES, FAQS, DOCTORS, REVIEWS } from '../data';
import { SectionHeading } from '../components/Shared';

const SpecialtyCard = ({ specialty, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-white border border-slate-200 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
  >
    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-teal-50 transition-all duration-500">
      {React.cloneElement(specialty.icon as React.ReactElement, { size: 32 })}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-800">{specialty.title}</h3>
    <p className="text-base text-slate-500 leading-relaxed">
      {specialty.description}
    </p>
    <div className="mt-10 pt-8 border-t border-slate-50">
      <Link to={`/servicios/${specialty.id}`} className="text-[11px] font-black uppercase tracking-widest text-teal-600 flex items-center gap-3 group-hover:gap-5 transition-all">
        Ver detalles <ArrowRight size={14} />
      </Link>
    </div>
  </motion.div>
);

export const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <>
      <section className="relative pt-48 pb-20 md:pt-64 md:pb-40 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-[11px] font-black uppercase tracking-widest mb-10 shadow-sm border border-teal-100">
              <span className="flex text-teal-500">★★★★★</span>
              <span>Liderando la Odontología en Callao</span>
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-extrabold leading-[0.95] tracking-tighter text-slate-900 mb-10">
              Sonrisas que <br/>
              <span className="text-teal-600 italic font-medium">transforman</span> vidas.
            </h1>
            <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
              Especialistas en transformar tu salud dental con tecnología avanzada y un trato humano excepcional. Tu bienestar es nuestra única prioridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/reservar" className="px-12 py-6 bg-slate-900 text-white rounded-full font-bold text-xs uppercase tracking-[0.25em] hover:bg-teal-600 shadow-2xl hover:shadow-teal-500/40 transition-all flex items-center justify-center gap-3">
                Agendar Mi Consulta <ArrowRight size={18} />
              </Link>
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                  ].map((url, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                      <img src={url} alt="Paciente" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  84+ Reseñas <br/> Reales
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.25)] border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Paciente feliz"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-teal-100/50 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16 text-center relative z-10">
          {[
            { label: "Reseñas 5 ★", val: "84+" },
            { label: "Especialistas", val: "02" },
            { label: "Años de Exp.", val: "10+" },
            { label: "Pacientes Satisfechos", val: "1K+" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-extrabold mb-3 font-sans tracking-tighter text-white">{stat.val}</div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-teal-400 font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {DOCTORS.map((doc, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className={`space-y-6 ${i % 2 !== 0 ? 'pt-16' : ''}`}
                  >
                    <Link to={`/odontologos/${doc.id}`} className="block group">
                      <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[10px] border-slate-50 relative">
                        <img src={doc.image} alt={doc.name} className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 p-8 pt-20">
                           <span className="text-white text-[10px] font-black uppercase tracking-widest opacity-60">{doc.cop}</span>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h4 className="text-2xl font-extrabold text-slate-900 group-hover:text-teal-600 transition-colors">{doc.name}</h4>
                        <p className="text-sm font-black text-teal-600 uppercase tracking-widest mt-1">{doc.role}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-50/50 rounded-full blur-[120px]" />
            </div>

            <div>
              <SectionHeading subtitle="Nuestro Equipo">
                Pasión y experiencia al servicio de tu salud
              </SectionHeading>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                La Dra. Angela y el Dr. Renato unieron su visión para crear un centro donde la tecnología de punta y el trato humano se encuentran.
              </p>
              <div className="space-y-8">
                {[
                  "Atención personalizada directa por especialistas.",
                  "Miembros del Colegio Odontológico del Perú (COP).",
                  "Capacitación constante en técnicas internacionales.",
                  "Espacios modernos diseñados para tu comodidad."
                ].map((text, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-extrabold text-base text-slate-800 uppercase tracking-wide leading-tight">{text}</span>
                  </div>
                ))}
              </div>
              <Link to="/reservar" className="inline-flex mt-16 text-xs font-black uppercase tracking-[0.3em] text-slate-900 border-b-4 border-teal-500 pb-2 hover:text-teal-600 hover:border-slate-900 transition-all">
                Conoce más de nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Nuestros Servicios" center>
            Expertos en cada detalle <br className="hidden md:block" /> de tu salud oral
          </SectionHeading>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SPECIALTIES.map((item, idx) => (
              <SpecialtyCard key={idx} specialty={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW --- */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Casos de Éxito" center light>
            Resultados que <br/> hablan por sí solos
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group relative rounded-[4rem] overflow-hidden border border-white/10 aspect-video md:aspect-square shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1597374024856-42777356038a?auto=format&fit=crop&q=80&w=1200" 
                alt="Caso 1" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-12">
                <div>
                   <span className="px-4 py-1.5 bg-teal-500 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Estética Dental</span>
                   <h4 className="text-3xl font-extrabold tracking-tight">Diseño de Sonrisa Digital</h4>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-10">
               <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
                    alt="Galería" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-between p-12">
                    <h4 className="text-2xl font-extrabold">Ver Galería Completa</h4>
                    <Link to="/galeria" className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center group-hover:rotate-45 transition-transform ring-8 ring-teal-500/20 shadow-2xl">
                      <ArrowRight size={24} className="text-slate-900" />
                    </Link>
                  </div>
               </div>
               <div className="group relative rounded-[3rem] overflow-hidden border border-white/10 shadow-xl bg-teal-900/40">
                  <div className="p-12 h-full flex flex-col justify-center">
                    <div className="flex gap-1 mb-6 text-teal-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-xl font-bold italic text-white/90 leading-relaxed">
                      "La mejor decisión que tomé por mi salud y confianza."
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQS --- */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading subtitle="FAQ" center>
            Resolvemos tus dudas
          </SectionHeading>
          
          <div className="space-y-6">
            {FAQS.slice(0, 3).map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeFaq === i ? 'border-teal-200 bg-teal-50/50 shadow-xl shadow-teal-500/5' : 'border-slate-100 bg-slate-50/50'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-10 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-extrabold ${activeFaq === i ? 'text-slate-900' : 'text-slate-600'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-500 ${activeFaq === i ? 'bg-slate-900 text-white border-slate-900 rotate-45' : ''}`}>
                    <Smile size={18} className={activeFaq === i ? 'rotate-0' : 'rotate-45'} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-10 pb-10 text-slate-500 leading-relaxed text-lg font-medium"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading subtitle="Testimonios" center>
            Lo que dicen nuestros pacientes
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-10 mt-12">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm relative text-left"
              >
                <div className="flex gap-1 mb-6 text-teal-500">
                  {Array(review.rating).fill(0).map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed text-lg font-medium">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-white font-black text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-extrabold text-slate-900">{review.name}</p>
                    <p className="text-[10px] uppercase font-black text-teal-600 tracking-widest mt-0.5">Paciente Verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACTO & MAPA --- */}
      <section id="contacto" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden group">
               <div className="relative z-10">
                 <SectionHeading subtitle="Ubicación" light>
                   Ven a visitarnos <br/> en Callao
                 </SectionHeading>
                 <div className="space-y-12 mt-12">
                    <div className="flex gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h4 className="text-xl font-extrabold mb-2">Nuestra Clínica</h4>
                          <p className="text-slate-400 font-medium leading-relaxed">Av. Garcilazo de la Vega 175, <br/> Urb. La Colonial, Callao, Perú.</p>
                       </div>
                    </div>
                    <div className="flex gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                          <Clock size={24} />
                       </div>
                       <div>
                          <h4 className="text-xl font-extrabold mb-2">Horario de Atención</h4>
                          <p className="text-slate-400 font-medium leading-relaxed">Lun - Vie: 9:00 AM - 8:00 PM <br/> Sábados: 9:00 AM - 3:00 PM</p>
                       </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-wrap gap-6">
                       <a href="https://wa.me/51989940726" target="_blank" className="px-10 py-5 bg-teal-500 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-teal-500/20">
                          WhatsApp Directo
                       </a>
                       <a href="tel:+51989940726" className="px-10 py-5 border border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                          <Phone size={16} /> Llamar
                       </a>
                    </div>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            </div>

            <div className="rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl relative min-h-[500px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.8157774787493!2d-77.1064047!3d-12.056127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cb8fd1654eeb%3A0xe57788470a969733!2sClinica%20Dental%20Modo%20Sonrisa%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

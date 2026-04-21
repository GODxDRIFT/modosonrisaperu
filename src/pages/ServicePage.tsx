import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SPECIALTIES } from '../data';
import { PageHero, SectionHeading } from '../components/Shared';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ServicePage = () => {
  const { serviceId } = useParams();
  const service = SPECIALTIES.find(s => s.id === serviceId);

  if (!service) return <div className="py-40 text-center">Servicio no encontrado</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={service.title} subtitle={service.description} />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">
          <div>
             <Link to="/" className="inline-flex items-center gap-2 text-teal-600 font-black text-[10px] uppercase tracking-widest mb-10 hover:gap-4 transition-all">
                <ArrowLeft size={14} /> Volver a Inicio
             </Link>
             <SectionHeading subtitle="Sobre el Tratamiento">
                ¿En qué consiste?
             </SectionHeading>
             <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
               {service.fullDescription}
             </p>

             <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 h-full">
                  <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                    Beneficios <CheckCircle2 className="text-teal-600" />
                  </h4>
                  <div className="space-y-6">
                    {service.benefits.map((b: string, i: number) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-teal-50/30 p-10 rounded-[3rem] border border-teal-100/50 h-full">
                  <h4 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                    Proceso <ArrowRight className="text-teal-600" />
                  </h4>
                  <div className="space-y-6">
                    {service.steps.map((s: string, i: number) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded-lg bg-teal-600 flex items-center justify-center text-white shrink-0 text-[10px] font-black">
                          {i + 1}
                        </div>
                        <span className="font-bold text-slate-800 text-sm leading-tight">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </div>

          <div className="space-y-12">
             <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <img src={service.image} alt={service.title} className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
             </div>

             <div className="bg-slate-900 p-12 rounded-[4rem] text-white">
                <h3 className="text-3xl font-extrabold mb-4">¿Listo para empezar?</h3>
                <p className="text-slate-400 mb-10 font-medium text-lg">Reserva tu cita de evaluación hoy mismo y da el primer paso hacia tu nueva sonrisa.</p>
                <div className="flex flex-col gap-4">
                  <Link to="/reservar" className="w-full py-5 bg-teal-500 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center shadow-xl shadow-teal-500/20 hover:bg-white transition-all">
                    Agendar Evaluación
                  </Link>
                  <a href="https://wa.me/51989940726" target="_blank" className="w-full py-5 border border-white/20 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                    Consultar por WhatsApp <MessageCircle size={18} />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <SectionHeading subtitle="Otros Servicios" center>
              Descubre más tratamientos
           </SectionHeading>
           <div className="grid md:grid-cols-3 gap-8">
              {SPECIALTIES.filter(s => s.id !== service.id).slice(0, 3).map((s, i) => (
                <Link key={i} to={`/servicios/${s.id}`} className="p-8 bg-white rounded-3xl border border-slate-200 hover:shadow-xl transition-all group">
                   <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-50 transition-colors">
                      {s.icon}
                   </div>
                   <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                   <p className="text-sm text-slate-500 font-medium mb-6 line-clamp-2">{s.description}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-teal-600">Saber más</span>
                </Link>
              ))}
           </div>
        </div>
      </section>
    </motion.div>
  );
};

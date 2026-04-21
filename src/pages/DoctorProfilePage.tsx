import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageHero } from '../components/Shared';
import { DOCTORS } from '../data';
import { motion } from 'motion/react';
import { Award, GraduationCap, CheckCircle2, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';

export const DoctorProfilePage = () => {
  const { id } = useParams();
  const doctor = DOCTORS.find(d => d.id === id);

  if (!doctor) return <Navigate to="/" />;

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        title={doctor.name}
        subtitle={doctor.role}
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-600 font-bold text-xs uppercase tracking-widest mb-12 transition-colors">
            <ArrowLeft size={16} /> Volver al Inicio
          </Link>

          <div className="grid lg:grid-cols-12 gap-20 items-start">
            {/* Image Column */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-teal-600 text-white p-8 rounded-[2rem] shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-80">Registro Profesional</p>
                    <p className="text-xl font-black">{doctor.cop}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 space-y-16">
              <div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Biografía Profesional</h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  {doctor.bio}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-teal-600">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">Educación</h3>
                  </div>
                  <ul className="space-y-4">
                    {doctor.education.map((edu, i) => (
                      <li key={i} className="flex gap-3 text-slate-500 font-medium leading-tight">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-teal-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">Especialidades</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {doctor.specialties.map((spec, i) => (
                      <span key={i} className="px-5 py-2.5 bg-slate-50 text-slate-600 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-100">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-extrabold mb-4">¿Deseas una cita con el/la {doctor.name}?</h3>
                  <p className="text-slate-400 mb-8 max-w-md font-medium">Agenda tu evaluación hoy mismo y deja tu salud oral en manos de expertos.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/reservar" className="px-10 py-5 bg-teal-500 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-2xl shadow-teal-500/20 flex items-center gap-3">
                      <Calendar size={16} /> Reservar Cita
                    </Link>
                    <a href="https://wa.me/51989940726" target="_blank" className="px-10 py-5 border border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
                      <MessageCircle size={16} /> Consultar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

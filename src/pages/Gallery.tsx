import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero, SectionHeading } from '../components/Shared';
import { GALLERY_CASES } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredCases = filter === 'all' 
    ? GALLERY_CASES 
    : GALLERY_CASES.filter(c => c.type === filter);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ortodoncia', label: 'Ortodoncia' },
    { id: 'estetica', label: 'Estética' },
    { id: 'implantes', label: 'Implantes' }
  ];

  return (
    <div className="bg-white min-h-screen">
      <PageHero 
        title="Nuestra Galería" 
        subtitle="Historias reales de transformación. El testimonio visual más fiel de nuestro compromiso con cada paciente." 
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
             {categories.map(cat => (
               <button
                 key={cat.id}
                 onClick={() => setFilter(cat.id)}
                 className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === cat.id ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
               >
                 {cat.label}
               </button>
             ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group"
                >
                  <div className="relative rounded-[3rem] overflow-hidden shadow-lg border border-slate-100">
                     <div className="grid grid-cols-2 gap-1 bg-slate-100">
                        <div className="relative">
                           <img src={item.before} alt="Antes" className="w-full h-64 object-cover" />
                           <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Antes</span>
                        </div>
                        <div className="relative">
                           <img src={item.after} alt="Después" className="w-full h-64 object-cover" />
                           <span className="absolute bottom-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Después</span>
                        </div>
                     </div>
                     <div className="p-8 bg-white">
                        <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 mb-2 block">{item.type}</span>
                        <h4 className="text-xl font-extrabold text-slate-900">{item.title}</h4>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8 italic">Tú puedes ser nuestro próximo caso de éxito.</h2>
           <p className="text-xl text-slate-400 mb-12 font-medium">Cada sonrisa es única y merece un plan especializado. Permítenos ayudarte a lucir la mejor versión de ti.</p>
           <Link to="/reservar" className="inline-block px-12 py-6 bg-teal-500 text-slate-900 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl shadow-teal-500/20">
              Quiero Empezar Mi Transformación
           </Link>
        </div>
      </section>
    </div>
  );
};

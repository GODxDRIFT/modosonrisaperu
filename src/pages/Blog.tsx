import React from 'react';
import { PageHero, SectionHeading } from '../components/Shared';
import { BLOG_POSTS } from '../data';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <PageHero title="Blog de Salud Dental" subtitle="Consejos, guías y últimas tendencias para que cuides tu sonrisa desde casa." />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-[10px] font-black uppercase tracking-widest text-teal-600">
                    Odontología
                  </div>
                </div>
                <div className="p-10">
                   <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                     <span className="flex items-center gap-2"><Clock size={14} /> {post.date}</span>
                     <span className="flex items-center gap-2"><User size={14} /> Dr. Modo Sonrisa</span>
                   </div>
                   <h3 className="text-2xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors">{post.title}</h3>
                   <p className="text-slate-500 mb-8 font-medium line-clamp-3 leading-relaxed">{post.excerpt}</p>
                   <Link to={`/blog/${post.id}`} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:gap-5 transition-all">
                     Leer más <ArrowRight size={16} className="text-teal-500" />
                   </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-teal-50">
         <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <SectionHeading subtitle="Suscripción" center>
              Recibe consejos en tu correo
            </SectionHeading>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl font-medium">Únete a nuestra comunidad y recibe tips exclusivos sobre salud dental para ti y tu familia.</p>
            <div className="w-full max-w-lg relative">
               <input 
                 type="email" 
                 placeholder="Tu correo electrónico" 
                 className="w-full p-8 bg-white rounded-full border-none shadow-2xl focus:ring-4 focus:ring-teal-500/10 font-bold placeholder:text-slate-300"
               />
               <button className="absolute right-2 top-2 bottom-2 px-10 bg-slate-900 text-white rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-teal-600 transition-all">
                  Suscribirme
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

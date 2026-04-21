import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { PageHero } from '../components/Shared';
import { ArrowLeft, Clock, User, Share2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const BlogPostPage = () => {
  const { postId } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(postId));

  if (!post) return <div className="py-40 text-center">Artículo no encontrado</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero title={post.title} subtitle={post.excerpt} />
      
      <article className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-teal-600 font-black text-[10px] uppercase tracking-widest mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={14} /> Volver al Blog
          </Link>

          <div className="rounded-[4rem] overflow-hidden shadow-2xl mb-16 border-[12px] border-slate-50">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          <div className="flex items-center gap-8 text-xs font-black uppercase tracking-widest text-slate-400 mb-12 border-b border-slate-100 pb-8">
            <span className="flex items-center gap-2"><Clock size={16} className="text-teal-500" /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={16} className="text-teal-500" /> Dr. Modo Sonrisa</span>
            <div className="ml-auto flex gap-4">
               <button className="text-slate-300 hover:text-teal-600 transition-colors"><Share2 size={18} /></button>
            </div>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, i) => (
              <p key={i} className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-10">
             <div>
               <h3 className="text-3xl font-extrabold mb-2 tracking-tight">¿Tienes dudas sobre este tema?</h3>
               <p className="text-slate-400 font-medium">Estamos para asesorarte directamente por WhatsApp.</p>
             </div>
             <a href="https://wa.me/51989940726" target="_blank" className="px-10 py-5 bg-teal-500 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all">
               Consultar ahora <MessageCircle size={18} />
             </a>
          </div>

          <div className="mt-20 border-t border-slate-100 pt-20">
             <h4 className="text-xs font-black uppercase tracking-widest text-teal-600 mb-10 text-center">Otros artículos que podrían interesarte</h4>
             <div className="grid md:grid-cols-2 gap-10">
                {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((other, i) => (
                  <Link key={i} to={`/blog/${other.id}`} className="group block">
                     <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                        <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <h5 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">{other.title}</h5>
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

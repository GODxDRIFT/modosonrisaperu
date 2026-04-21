import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Galería", href: "/galeria" },
    { name: "Blog", href: "/blog" },
    { name: "Reserva", href: "/reservar" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <Smile size={24} />
            </div>
            <div>
              <span className="text-lg font-black tracking-tighter text-slate-900 block leading-none">MODO SONRISA</span>
              <span className="text-[9px] font-bold text-teal-600 tracking-[0.3em] uppercase">Clínica Dental</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className={`text-[11px] font-black uppercase tracking-widest transition-colors ${location.pathname === link.href ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'}`}>
                {link.name}
              </Link>
            ))}
            <Link to="/reservar" className="px-6 py-3 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-500/20">
              Agendar Cita
            </Link>
          </div>

          <button className="md:hidden text-teal-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t p-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className="text-lg font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/reservar" className="w-full py-4 bg-teal-600 text-white rounded-xl text-center font-bold" onClick={() => setIsMobileMenuOpen(false)}>
                  Agendar Cita
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
               <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-slate-900">
                 <Smile size={24} />
               </div>
               <span className="text-xl font-black tracking-tighter">MODO SONRISA</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 font-medium">
              Especialistas en transformar tu salud dental con tecnología avanzada y un trato humano excepcional en el corazón de Callao.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-400 mb-6">Enlaces</h4>
            <div className="flex flex-col gap-4">
              {navLinks.map(l => <Link key={l.name} to={l.href} className="text-slate-400 hover:text-white transition-colors font-bold text-sm">{l.name}</Link>)}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-teal-400 mb-6">Legal</h4>
            <div className="flex flex-col gap-4 text-slate-400 text-sm font-bold">
              <Link to="/privacidad" className="hover:text-white">Privacidad</Link>
              <Link to="/terminos" className="hover:text-white">Términos</Link>
              <Link to="/mapa" className="hover:text-white">Mapa del Sitio</Link>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <span>© {new Date().getFullYear()} Modo Sonrisa Perú</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-400">Instagram</a>
            <a href="#" className="hover:text-teal-400">Facebook</a>
            <a href="#" className="hover:text-teal-400">TikTok</a>
          </div>
        </div>
      </footer>

      {/* FLOAT WHATSAPP */}
      <a 
        href="https://wa.me/51989940726" 
        className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] z-[60] hover:scale-110 transition-transform active:scale-95 group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={36} />
        <span className="absolute right-full mr-6 bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0">
          ¿Dudas? Chatea con nosotros
        </span>
      </a>
    </div>
  );
};

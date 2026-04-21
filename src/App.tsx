import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { Booking } from './pages/Booking';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPostPage';
import { DoctorProfilePage } from './pages/DoctorProfilePage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/odontologos/:id" element={<DoctorProfilePage />} />
        <Route path="/servicios" element={<Home />} /> {/* Fallback or list */}
        <Route path="/servicios/:serviceId" element={<ServicePage />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/reservar" element={<Booking />} />
        
        {/* Basic legal pages could be added here later */}
        <Route path="/privacidad" element={<div className="py-40 text-center font-bold text-3xl">Página de Privacidad (Próximamente)</div>} />
        <Route path="/terminos" element={<div className="py-40 text-center font-bold text-3xl">Términos y Condiciones (Próximamente)</div>} />
        
        <Route path="*" element={<div className="py-40 text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p>Página no encontrada</p>
        </div>} />
      </Routes>
    </Layout>
  );
}

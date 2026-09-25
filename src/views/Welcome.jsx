import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-thinkers-orange flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Fondo inmersivo */}
      <motion.div 
        animate={{ opacity: [0, 0.4, 0.4], scale: [0.9, 1, 1] }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
      />

      <div className="z-10 text-center text-white max-w-sm w-full space-y-12 flex flex-col items-center h-full justify-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="space-y-6"
        >
          {/* Logo blanco sobre naranja */}
          <img src="/logo-white.png" alt="Thinkers HI" className="w-48 mx-auto mb-8" />
          
          <h1 className="text-4xl font-bold tracking-tight leading-tight">
            Hola, Bienvenido a Thinkers.
          </h1>
          <p className="text-xl font-medium text-white/90">
            El espacio para la Innovación Humana.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', bounce: 0.5 }}
          className="w-full pt-12"
        >
          <button 
            onClick={() => navigate('/onboarding')}
            className="w-full bg-white text-thinkers-orange text-xl font-bold py-5 rounded-2xl shadow-[0_8px_0_rgba(255,255,255,0.3)] active:shadow-[0_0px_0_rgba(255,255,255,0.3)] active:translate-y-2 transition-all"
          >
            Comenzar
          </button>
        </motion.div>
      </div>
    </div>
  );
}

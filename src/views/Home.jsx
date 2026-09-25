import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { challenges } from '../data/mockChallenges';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const navigate = useNavigate();
  const { journey, preferences, startChallenge, resetAll } = useAppContext();

  const inProgressId = journey?.inProgress;
  const completedIds = journey?.completed?.map(c => c.challengeId) || [];
  const nextChallenge = challenges.find(c => c.id !== inProgressId && !completedIds.includes(c.id));
  const completedCount = completedIds.length;
  const allCompleted = completedCount >= challenges.length && !inProgressId;

  const handleStart = (id) => {
    startChallenge(id);
    navigate(`/challenge/${id}`);
  };

  const handleReset = () => {
    if (window.confirm('¿Seguro que deseas reiniciar tu progreso? Se borrarán tus retos completados.')) {
      resetAll();
    }
  };

  return (
    <div className="min-h-screen bg-soft-surface text-ink pb-28">
      {/* Header */}
      <header className="bg-white px-6 py-5 sticky top-0 z-30 flex justify-between items-center border-b-2 border-ink/10 shadow-sm">
        <img src="/logo-dark.png" alt="Thinkers" className="h-16 object-contain" />
        <button 
          onClick={handleReset}
          className="text-xs font-bold text-ink-muted hover:text-thinkers-orange border-2 border-ink/10 px-3 py-1 rounded-xl focus-visible:ring-2 focus-visible:ring-thinkers-orange"
        >
          🔄 Reset
        </button>
      </header>

      <div className="max-w-md mx-auto p-6 mt-4">
        
        {/* Saludo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-ink">¡Hola, {preferences?.name || 'innovador'}! 👋</h1>
          <p className="text-lg font-bold text-ink-muted mt-1">¿Listo para innovar hoy?</p>
        </div>

        {/* Stats rápidas */}
        {completedCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 mb-8"
          >
            <div className="flex-1 bg-white p-4 rounded-2xl border-2 border-ink/10 text-center shadow-sm">
              <span className="text-3xl font-bold text-thinkers-orange">{completedCount}</span>
              <p className="text-xs font-bold text-ink-muted mt-1">Completados</p>
            </div>
            <div className="flex-1 bg-white p-4 rounded-2xl border-2 border-ink/10 text-center shadow-sm">
              <span className="text-3xl font-bold text-ink">{Math.max(0, challenges.length - completedCount)}</span>
              <p className="text-xs font-bold text-ink-muted mt-1">Por descubrir</p>
            </div>
          </motion.div>
        )}

        {/* All completed state */}
        {allCompleted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6 py-8"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', bounce: 0.6, delay: 0.2 }}
              className="w-28 h-28 bg-thinkers-orange rounded-full flex items-center justify-center mx-auto shadow-[0_8px_0_#C52707]"
            >
              <span className="text-5xl" aria-hidden="true">🏆</span>
            </motion.div>
            <h2 className="text-2xl font-bold text-ink">¡Completaste todos los retos!</h2>
            <p className="text-lg font-bold text-ink-muted">Increíble trabajo, {preferences?.name}. Has practicado Observación, Cuestionamiento y Asociación.</p>
            <button 
              onClick={() => navigate('/journey')}
              className="w-full bg-thinkers-orange text-white text-xl font-bold py-4 rounded-2xl shadow-[0_6px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1 transition-all"
            >
              Ver mi recorrido
            </button>
          </motion.div>
        ) : inProgressId ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-ink">Tu reto actual</h2>
            <div className="bg-white p-6 rounded-3xl border-2 border-thinkers-orange shadow-[0_6px_0_#C52707] relative">
              <div className="absolute -top-3 right-4 bg-thinkers-orange text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                En curso
              </div>
              <h3 className="text-xl font-bold text-ink mb-2">{challenges.find(c => c.id === inProgressId)?.title}</h3>
              <p className="text-ink-muted font-bold mb-6">{challenges.find(c => c.id === inProgressId)?.skill} · {challenges.find(c => c.id === inProgressId)?.difficulty}</p>
              
              <button 
                onClick={() => navigate(`/challenge/${inProgressId}`)} 
                className="w-full bg-thinkers-orange text-white text-xl font-bold py-4 rounded-2xl shadow-[0_6px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1 transition-all"
              >
                Continuar
              </button>
            </div>
          </div>
        ) : nextChallenge ? (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-ink">Tu próximo reto</h2>
            <div className="bg-white p-6 rounded-3xl border-2 border-ink/10 shadow-[0_6px_0_rgba(29,26,23,0.1)]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-thinkers-orange/10 text-thinkers-orange rounded-2xl flex items-center justify-center text-3xl">
                  <span aria-hidden="true">{nextChallenge.skill === 'Observación' ? '👀' : nextChallenge.skill === 'Cuestionamiento' ? '🤔' : '🔗'}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink">{nextChallenge.title}</h3>
                  <p className="text-ink-muted font-bold text-sm uppercase">{nextChallenge.skill} · {nextChallenge.difficulty}</p>
                </div>
              </div>
              
              <button 
                onClick={() => handleStart(nextChallenge.id)} 
                className="w-full bg-thinkers-orange text-white text-xl font-bold py-4 rounded-2xl shadow-[0_6px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1 transition-all mt-4"
              >
                Empezar ahora
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <BottomNav />
    </div>
  );
}

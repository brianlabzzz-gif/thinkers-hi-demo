import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { challenges } from '../data/mockChallenges';
import BottomNav from '../components/BottomNav';

const skillFilters = ['Todas', 'Observación', 'Cuestionamiento', 'Asociación'];
const diffFilters = ['Todas', 'Fácil', 'Medio', 'Difícil'];

const skillIcons = {
  'Observación': '👀',
  'Cuestionamiento': '🤔',
  'Asociación': '🔗'
};

const diffColors = {
  'Fácil': 'bg-green-100 text-green-700',
  'Medio': 'bg-yellow-100 text-yellow-700',
  'Difícil': 'bg-red-100 text-red-700'
};

export default function Explore() {
  const navigate = useNavigate();
  const { journey, startChallenge } = useAppContext();
  const [skillFilter, setSkillFilter] = useState('Todas');
  const [diffFilter, setDiffFilter] = useState('Todas');

  const completedIds = journey?.completed?.map(c => c.challengeId) || [];
  const inProgressId = journey?.inProgress;

  const filtered = challenges.filter(c => {
    if (skillFilter !== 'Todas' && c.skill !== skillFilter) return false;
    if (diffFilter !== 'Todas' && c.difficulty !== diffFilter) return false;
    return true;
  });

  const getStatus = (id) => {
    if (completedIds.includes(id)) return 'completado';
    if (inProgressId === id) return 'en-curso';
    return 'nuevo';
  };

  const handleStart = (id) => {
    startChallenge(id);
    navigate(`/challenge/${id}`);
  };

  return (
    <div className="min-h-screen bg-soft-surface text-ink pb-28">
      <header className="bg-white px-6 py-5 sticky top-0 z-30 border-b-2 border-ink/10 shadow-sm">
        <h1 className="text-2xl font-bold text-ink">Explorar Retos</h1>
      </header>

      <div className="max-w-md mx-auto p-6">

        {/* Filtros de Habilidad */}
        <div className="mb-4">
          <p className="text-xs font-bold text-ink-muted uppercase tracking-wider mb-2">Habilidad</p>
          <div className="flex gap-2 flex-wrap">
            {skillFilters.map(f => (
              <button
                key={f}
                onClick={() => setSkillFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${
                  skillFilter === f
                    ? 'bg-thinkers-orange text-white border-thinkers-orange shadow-[0_3px_0_#C52707]'
                    : 'bg-white text-ink-muted border-ink/10 hover:border-ink/30 shadow-[0_3px_0_rgba(29,26,23,0.1)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Filtros de Dificultad */}
        <div className="mb-8">
          <p className="text-xs font-bold text-ink-muted uppercase tracking-wider mb-2">Dificultad</p>
          <div className="flex gap-2 flex-wrap">
            {diffFilters.map(f => (
              <button
                key={f}
                onClick={() => setDiffFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 ${
                  diffFilter === f
                    ? 'bg-thinkers-orange text-white border-thinkers-orange shadow-[0_3px_0_#C52707]'
                    : 'bg-white text-ink-muted border-ink/10 hover:border-ink/30 shadow-[0_3px_0_rgba(29,26,23,0.1)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Retos */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <span className="text-5xl">🔍</span>
            <p className="text-lg font-bold text-ink-muted">No encontramos retos con esta combinación.</p>
            <button 
              onClick={() => { setSkillFilter('Todas'); setDiffFilter('Todas'); }}
              className="text-thinkers-orange font-bold underline"
            >
              Quitar filtros
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {filtered.map((c, i) => {
                const status = getStatus(c.id);
                return (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`bg-white p-5 rounded-2xl border-2 transition-all ${
                      status === 'completado' 
                        ? 'border-green-300 opacity-80' 
                        : status === 'en-curso'
                        ? 'border-thinkers-orange shadow-[0_4px_0_#C52707]'
                        : 'border-ink/10 shadow-[0_4px_0_rgba(29,26,23,0.1)]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl mt-1">{skillIcons[c.skill]}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-ink">{c.title}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold text-ink-muted uppercase">{c.skill}</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${diffColors[c.difficulty]}`}>{c.difficulty}</span>
                          {status === 'completado' && <span className="text-xs font-bold text-green-800 bg-green-100 px-2 py-0.5 rounded-md">✓ Completado</span>}
                          {status === 'en-curso' && <span className="text-xs font-bold text-thinkers-orange bg-thinkers-orange/10 px-2 py-0.5 rounded-md">En curso</span>}
                        </div>
                        
                        <button
                          onClick={() => handleStart(c.id)}
                          className={`w-full text-center py-3 rounded-xl font-bold transition-all ${
                            status === 'completado'
                              ? 'bg-ink/5 text-ink-muted border-2 border-ink/10'
                              : status === 'en-curso'
                              ? 'bg-thinkers-orange text-white shadow-[0_4px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1'
                              : 'bg-thinkers-orange text-white shadow-[0_4px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1'
                          }`}
                        >
                          {status === 'completado' ? 'Volver a explorar' : status === 'en-curso' ? 'Continuar' : 'Empezar'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}

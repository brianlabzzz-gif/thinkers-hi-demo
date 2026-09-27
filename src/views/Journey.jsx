import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { challenges, fillOpportunityTemplate } from '../data/mockChallenges';
import BottomNav from '../components/BottomNav';

const skillIcons = {
  'Observación': '👀',
  'Cuestionamiento': '🤔',
  'Asociación': '🔗'
};

export default function Journey() {
  const navigate = useNavigate();
  const { journey, startChallenge } = useAppContext();

  const completedItems = journey?.completed || [];
  const inProgressId = journey?.inProgress;
  const inProgressChallenge = inProgressId ? challenges.find(c => c.id === inProgressId) : null;

  const handleStart = (id) => {
    startChallenge(id);
    navigate(`/challenge/${id}`);
  };

  return (
    <div className="min-h-screen bg-soft-surface text-ink pb-28">
      <header className="bg-white px-6 py-5 sticky top-0 z-30 border-b-2 border-ink/10 shadow-sm">
        <h1 className="text-2xl font-bold text-ink">Mi Recorrido</h1>
      </header>

      <div className="max-w-md mx-auto p-6">
        <div className="flex gap-4 mb-8">
          <div className="flex-1 bg-white p-4 rounded-2xl border-2 border-ink/10 text-center shadow-sm">
            <span className="text-3xl font-bold text-thinkers-orange">{completedItems.length}</span>
            <p className="text-xs font-bold text-ink-muted mt-1">Completados</p>
          </div>
          <div className="flex-1 bg-white p-4 rounded-2xl border-2 border-ink/10 text-center shadow-sm">
            <span className="text-3xl font-bold text-ink">{new Set(completedItems.map(c => {
              const ch = challenges.find(x => x.id === c.challengeId);
              return ch?.skill;
            }).filter(Boolean)).size}</span>
            <p className="text-xs font-bold text-ink-muted mt-1">Habilidades</p>
          </div>
        </div>

        {inProgressChallenge && (
          <div className="mb-8">
            <h2 className="text-lg font-bold text-ink mb-4">En curso</h2>
            <div className="bg-white p-5 rounded-2xl border-2 border-thinkers-orange shadow-[0_4px_0_#C52707]">
              <div className="flex items-center gap-4">
                <span className="text-3xl" aria-hidden="true">{skillIcons[inProgressChallenge.skill]}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">{inProgressChallenge.title}</h3>
                  <p className="text-sm font-bold text-ink-muted">{inProgressChallenge.skill} · {inProgressChallenge.difficulty}</p>
                </div>
              </div>
              <button
                onClick={() => navigate(`/challenge/${inProgressChallenge.id}`)}
                className="w-full bg-thinkers-orange text-white font-bold py-3 rounded-xl mt-4 shadow-[0_4px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1 transition-all"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        <div>
          <h2 className="text-lg font-bold text-ink mb-4">Lo que exploraste</h2>

          {completedItems.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <span className="text-5xl" aria-hidden="true">🌱</span>
              <p className="text-lg font-bold text-ink-muted">Aún no has completado ningún reto.</p>
              <button
                onClick={() => navigate('/explore')}
                className="text-thinkers-orange font-bold underline"
              >
                Explorar retos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {completedItems.map((item, i) => {
                const ch = challenges.find(c => c.id === item.challengeId);
                if (!ch) return null;

                const date = new Date(item.completedAt);
                const dateStr = date.toLocaleDateString('es-419', { day: 'numeric', month: 'short' });
                const phrase = item.opportunityPhrase || fillOpportunityTemplate(ch.opportunity_template, item.opportunity || []);

                return (
                  <motion.div
                    key={`${item.challengeId}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white p-5 rounded-2xl border-2 border-green-200 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl" aria-hidden="true">
                        ✅
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-ink">{ch.title}</h3>
                        <p className="text-sm font-bold text-ink-muted">{ch.skill} · {ch.difficulty}</p>
                        <p className="text-xs text-ink-muted mt-1">Completado el {dateStr}</p>

                        {item.observation && (
                          <div className="mt-3 bg-warm-canvas p-3 rounded-xl">
                            <p className="text-xs font-bold text-ink-muted uppercase mb-1">Tu respuesta</p>
                            <p className="text-sm font-medium text-ink">{item.observation}</p>
                          </div>
                        )}

                        {item.deepen && (
                          <div className="mt-2 bg-warm-canvas p-3 rounded-xl">
                            <p className="text-xs font-bold text-ink-muted uppercase mb-1">Tu idea</p>
                            <p className="text-sm font-medium text-ink">{item.deepen}</p>
                          </div>
                        )}

                        {phrase && phrase.replace(/______/g, '').trim() && (
                          <div className="mt-2 bg-warm-canvas p-3 rounded-xl">
                            <p className="text-xs font-bold text-ink-muted uppercase mb-1">Tu oportunidad</p>
                            <p className="text-sm font-medium text-ink">{phrase}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { challenges, recommendedChallengeId, skillForInterest } from '../data/mockChallenges';

export default function Onboarding() {
  const navigate = useNavigate();
  const { completeOnboarding, startChallenge } = useAppContext();

  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hiTyped, setHiTyped] = useState('');
  const [answers, setAnswers] = useState({
    interest: null,
    context: null,
    help: null
  });

  const totalSteps = 5;
  const HI_BEATS = ['', 'H', 'HI', 'HI.'];

  useEffect(() => {
    if (step !== 4) {
      setHiTyped('');
      return;
    }
    const i = HI_BEATS.indexOf(hiTyped);
    if (i >= HI_BEATS.length - 1) return;
    const waits = [400, 400, 400];
    const t = setTimeout(() => {
      setHiTyped(HI_BEATS[i < 0 ? 1 : i + 1]);
    }, waits[Math.max(0, i)] || 400);
    return () => clearTimeout(t);
  }, [step, hiTyped]);

  const questions = [
    {
      id: 'interest',
      title: `${userName}, ¿qué suele despertar tu curiosidad?`,
      options: [
        { id: 'opt1', label: 'Entender cómo funciona algo' },
        { id: 'opt2', label: 'Saber por qué hacemos las cosas así' },
        { id: 'opt3', label: 'Imaginar otros usos para las cosas' },
        { id: 'opt4', label: 'Un poco de todo' }
      ]
    },
    {
      id: 'context',
      title: '¿Dónde sueles pensar "esto podría ser mejor"?',
      options: [
        { id: 'opt1', label: 'En mi trabajo o negocio' },
        { id: 'opt2', label: 'En mis estudios' },
        { id: 'opt3', label: 'En mis actividades diarias' },
        { id: 'opt4', label: 'En los lugares por donde paso' }
      ]
    },
    {
      id: 'help',
      title: 'Si algo no sale como esperabas, ¿qué haces?',
      options: [
        { id: 'opt1', label: 'Miro con más atención qué pasó' },
        { id: 'opt2', label: 'Pregunto para entenderlo mejor' },
        { id: 'opt3', label: 'Pruebo otra manera de hacerlo' },
        { id: 'opt4', label: 'Busco un ejemplo que me guía' }
      ]
    }
  ];

  const recommendedId = recommendedChallengeId(answers.interest);
  const recommendedSkill = skillForInterest(answers.interest);
  const recommendedChallenge = challenges.find(c => c.id === recommendedId);

  const skillIntro = {
    Observación: 'Observar es notar lo que otros pasan por alto. Los innovadores la usan para detectar problemas reales antes de inventar soluciones.',
    Cuestionamiento: 'Cuestionar es preguntar por qué las cosas son así. Sirve para abrir caminos que un “siempre se ha hecho así” deja cerrados.',
    Asociación: 'Asociar es unir ideas que no suelen ir juntas. Es cómo nace un producto nuevo a partir de dos mundos que ya conocías.',
    Experimentación: 'Experimentar es probar en pequeño. Baja el miedo a equivocarse y te dice rápido qué funciona.',
    'Red de contactos': 'La red no es recolectar tarjetas: es pedir perspectiva a alguien que vive otro contexto. Las mejores ideas casi nunca nacen solas.'
  };

  const handleNext = () => {
    if (step === 0 && !userName.trim()) return;
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
    else navigate('/');
  };

  const selectOption = (questionId, optionId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    setTimeout(() => {
      handleNext();
      setIsTransitioning(false);
    }, 400);
  };

  const finishOnboarding = () => {
    const id = recommendedId;
    completeOnboarding({ ...answers, name: userName });
    startChallenge(id);
    window.setTimeout(() => {
      navigate(`/challenge/${id}`, { replace: true });
    }, 0);
  };

  const progressPercent = (step / (totalSteps - 1)) * 100;

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', bounce: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-soft-surface text-ink flex flex-col items-center p-6 relative overflow-hidden">
      <div className="w-full max-w-md flex items-center gap-4 mt-4 z-20">
        {step < 4 ? (
        <button
          onClick={handleBack}
          className="text-ink-muted text-2xl font-bold p-2 hover:bg-ink/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-thinkers-orange"
          aria-label="Volver"
        >
          ←
        </button>
        ) : (
        <div className="w-10" />
        )}
        <div className="flex-1 h-4 bg-ink/10 rounded-full overflow-hidden" role="progressbar" aria-valuenow={step} aria-valuemin={0} aria-valuemax={totalSteps - 1}>
          <motion.div
            className="h-full bg-thinkers-orange rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="w-full max-w-md z-10 flex-1 flex flex-col justify-center mt-8">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="name-step" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-2xl font-bold text-ink">Antes de empezar, queremos conocerte.</h1>
                <p className="text-lg text-ink-muted">¿Cómo te llamas?</p>
              </div>

              <div className="pt-4 space-y-6">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Escribe tu nombre..."
                  aria-label="Tu nombre"
                  className="w-full text-2xl font-bold text-center bg-white border-2 border-ink/10 rounded-2xl p-6 focus:outline-none focus:border-thinkers-orange focus:ring-4 focus:ring-thinkers-orange/20 shadow-sm transition-all"
                  autoFocus
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                />
                <button
                  onClick={handleNext}
                  disabled={!userName.trim()}
                  className="w-full bg-thinkers-orange text-white text-lg font-bold py-3.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:translate-y-0.5 transition-all disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ink"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step > 0 && step < 4 && (
            <motion.div key={`question-${step}`} variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8">
              <h1 className="text-2xl font-bold text-ink leading-tight text-center">
                {questions[step - 1].title}
              </h1>

              <div className="space-y-4">
                {questions[step - 1].options.map(option => {
                  const qId = questions[step - 1].id;
                  const isSelected = answers[qId] === option.id;

                  return (
                    <button
                      key={option.id}
                      disabled={isTransitioning}
                      onClick={() => selectOption(qId, option.id)}
                      className={`w-full flex items-center p-5 rounded-2xl border-2 text-left transition-all duration-200 focus-visible:ring-2 focus-visible:ring-thinkers-orange ${
                        isSelected
                          ? 'border-thinkers-orange bg-thinkers-orange/10'
                          : 'border-ink/10 bg-white hover:border-ink/30'
                      } disabled:pointer-events-none`}
                    >
                      <span className="text-lg font-semibold text-ink text-left">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="recommend" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-8 text-center">
              <p className="text-5xl font-semibold tracking-tight min-h-[60px]" aria-hidden="true">
                {hiTyped.split('').map((ch, i) => (
                  <span
                    key={i}
                    className={ch === 'H' ? 'text-thinkers-orange' : 'text-ink'}
                  >
                    {ch}
                  </span>
                ))}
              </p>
              <h1 className="text-2xl font-bold text-ink">Listo, {userName}.</h1>
              <p className="text-lg font-bold text-ink">
                Empecemos por un reto de <span className="text-thinkers-orange">{recommendedSkill}</span>.
              </p>
              <p className="text-base text-ink-muted leading-relaxed px-1">
                {skillIntro[recommendedSkill] || 'Esta habilidad es una de las que usan quienes detectan oportunidades y las convierten en algo concreto.'}
              </p>
              <div className="bg-white p-6 rounded-3xl border-2 border-ink/10 shadow-sm text-left">
                <p className="text-xs font-bold text-ink-muted uppercase mb-1">Primer reto</p>
                <h2 className="text-xl font-bold text-ink">{recommendedChallenge?.title}</h2>
                <p className="text-sm font-bold text-ink-muted mt-1">
                  {recommendedChallenge?.skill} · {recommendedChallenge?.difficulty}
                </p>
              </div>
              <button
                onClick={finishOnboarding}
                className="w-full bg-thinkers-orange text-white text-lg font-bold py-3.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:translate-y-0.5 transition-all focus-visible:ring-2 focus-visible:ring-ink"
              >
                Empezar reto
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

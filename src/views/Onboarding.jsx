import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

export default function Onboarding() {
  const navigate = useNavigate();
  const { completeOnboarding, startChallenge } = useAppContext();
  
  const [step, setStep] = useState(0); 
  const [userName, setUserName] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [answers, setAnswers] = useState({
    interest: null,
    context: null,
    help: null
  });

  const totalSteps = 4; // name + 3 questions

  const questions = [
    {
      id: 'interest',
      title: `${userName}, ¿qué suele despertar tu curiosidad?`,
      options: [
        { id: 'opt1', label: 'Entender cómo funciona algo', icon: '🔍' },
        { id: 'opt2', label: 'Saber por qué hacemos las cosas así', icon: '🤔' },
        { id: 'opt3', label: 'Imaginar otros usos para las cosas', icon: '✨' },
        { id: 'opt4', label: 'Un poco de todo', icon: '🌍' }
      ]
    },
    {
      id: 'context',
      title: '¿Dónde sueles pensar "esto podría ser mejor"?',
      options: [
        { id: 'opt1', label: 'En mi trabajo o negocio', icon: '💼' },
        { id: 'opt2', label: 'En mis estudios', icon: '📚' },
        { id: 'opt3', label: 'En mis actividades diarias', icon: '🏠' },
        { id: 'opt4', label: 'En los lugares por donde paso', icon: '🚶' }
      ]
    },
    {
      id: 'help',
      title: 'Si algo no sale como esperabas, ¿qué haces?',
      options: [
        { id: 'opt1', label: 'Miro con más atención qué pasó', icon: '👀' },
        { id: 'opt2', label: 'Pregunto para entenderlo mejor', icon: '🗣️' },
        { id: 'opt3', label: 'Pruebo otra manera de hacerlo', icon: '🔄' },
        { id: 'opt4', label: 'Busco un ejemplo que me guíe', icon: '📖' }
      ]
    }
  ];

  const handleNext = () => {
    if (step === 0 && !userName.trim()) return;
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      finishOnboarding();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
    else navigate('/');
  };

  const selectOption = (questionId, optionId) => {
    if (isTransitioning) return; // Prevent double-tap
    setIsTransitioning(true);
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    setTimeout(() => {
      handleNext();
      setIsTransitioning(false);
    }, 400);
  };

  const finishOnboarding = () => {
    completeOnboarding({ ...answers, name: userName });
    let recommendedId = 'OBS-01'; 
    if (answers.interest === 'opt2') recommendedId = 'CUE-01';
    if (answers.interest === 'opt3') recommendedId = 'ASO-01';
    startChallenge(recommendedId);
    navigate(`/challenge/${recommendedId}`);
  };

  // Progress: step 0 = 0%, step 1 after answer = 33%, etc.
  // Show progress based on completed steps (step index / total)
  const progressPercent = (step / totalSteps) * 100;

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, type: 'spring', bounce: 0.3 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-soft-surface text-ink flex flex-col items-center p-6 relative overflow-hidden">
      
      {/* Barra de progreso NARANJA */}
      <div className="w-full max-w-md flex items-center gap-4 mt-4 z-20">
        <button 
          onClick={handleBack} 
          className="text-ink-muted text-2xl font-bold p-2 hover:bg-ink/5 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-thinkers-orange"
          aria-label="Volver"
        >
          ←
        </button>
        <div className="flex-1 h-4 bg-ink/10 rounded-full overflow-hidden" role="progressbar" aria-valuenow={step} aria-valuemin={0} aria-valuemax={totalSteps}>
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
                <span className="text-5xl" aria-hidden="true">👋</span>
                <h1 className="text-2xl font-bold text-ink">Primero que todo, queremos conocerte.</h1>
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
                  className="w-full bg-thinkers-orange text-white text-xl font-bold py-5 rounded-2xl shadow-[0_6px_0_#C52707] active:shadow-[0_0px_0_#C52707] active:translate-y-1 transition-all disabled:opacity-50 disabled:shadow-[0_6px_0_rgba(0,0,0,0.1)] focus-visible:ring-2 focus-visible:ring-ink"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step > 0 && (
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
                      className={`w-full flex items-center p-5 rounded-2xl border-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-thinkers-orange ${
                        isSelected 
                          ? 'border-thinkers-orange bg-thinkers-orange/10 shadow-[0_4px_0_#C52707] scale-[0.98] translate-y-1' 
                          : 'border-ink/10 bg-white hover:border-ink/30 shadow-[0_4px_0_rgba(29,26,23,0.1)] active:shadow-[0_0px_0_rgba(29,26,23,0.1)] active:translate-y-1'
                      } disabled:pointer-events-none`}
                    >
                      <span className="text-3xl mr-4" aria-hidden="true">{option.icon}</span>
                      <span className="text-lg font-bold text-ink/90 text-left">
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}

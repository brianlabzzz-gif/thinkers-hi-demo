import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../context/AppContext';
import { challenges, getNextChallenge, fillOpportunityTemplate } from '../data/mockChallenges';

export default function Challenge() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { finishChallenge, preferences, startChallenge, saveChallengeProgress, journey } = useAppContext();

  const challenge = challenges.find(c => c.id === id);

  useEffect(() => {
    if (!challenge) navigate('/explore', { replace: true });
  }, [challenge, navigate]);

  const blanksCount = challenge?.opportunity_blanks?.length || 2;
  const sameInProgress = journey?.inProgress === id;

  const [step, setStep] = useState(() => (sameInProgress && journey.inProgressStep) ? journey.inProgressStep : 1);
  const [selectedOption, setSelectedOption] = useState(() => {
    if (!sameInProgress) return null;
    const optId = journey.inProgressDraft?.selectedOptionId;
    return challenge?.options.find(o => o.id === optId) || null;
  });
  const [deepenText, setDeepenText] = useState(() => (sameInProgress ? journey.inProgressDraft?.deepenText : '') || '');
  const [oppBlanks, setOppBlanks] = useState(() => {
    const saved = sameInProgress ? journey.inProgressDraft?.oppBlanks : null;
    if (saved && saved.length) return saved;
    return Array(blanksCount).fill('');
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [exampleIndex, setExampleIndex] = useState(0);
  const skipPersist = React.useRef(true);
  const activeId = challenge?.id;

  useEffect(() => {
    if (!challenge) return;
    skipPersist.current = true;

    const resume =
      journey.inProgress === challenge.id &&
      journey.inProgressStep >= 1 &&
      journey.inProgressStep < 5;

    if (resume) {
      setStep(journey.inProgressStep);
      const optId = journey.inProgressDraft?.selectedOptionId;
      setSelectedOption(challenge.options.find(o => o.id === optId) || null);
      setDeepenText(journey.inProgressDraft?.deepenText || '');
      const saved = journey.inProgressDraft?.oppBlanks;
      setOppBlanks(
        saved && saved.length === blanksCount
          ? saved
          : Array(blanksCount).fill('')
      );
    } else {
      setStep(1);
      setSelectedOption(null);
      setDeepenText('');
      setOppBlanks(Array(blanksCount).fill(''));
      startChallenge(challenge.id);
    }

    setExampleIndex(0);
    setIsTransitioning(false);

    const t = setTimeout(() => {
      skipPersist.current = false;
    }, 50);
    return () => clearTimeout(t);
  }, [activeId]);

  useEffect(() => {
    if (!challenge || skipPersist.current) return;
    saveChallengeProgress(challenge.id, step, {
      selectedOptionId: selectedOption?.id || null,
      deepenText,
      oppBlanks
    });
  }, [step, selectedOption, deepenText, oppBlanks, activeId]);

  if (!challenge) return null;

  const updateBlank = (index, value) => {
    setOppBlanks(prev => prev.map((b, i) => i === index ? value : b));
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const selectAndAdvance = (opt) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSelectedOption(opt);
    setTimeout(() => {
      handleNext();
      setIsTransitioning(false);
    }, 300);
  };

  const isCorrect =
    selectedOption &&
    challenge.correctOption &&
    selectedOption.id === challenge.correctOption;
  const feedbackData =
    selectedOption?.feedback ||
    (isCorrect ? challenge.feedback?.correct : challenge.feedback?.incorrect) ||
    { title: 'Miremos eso con calma.', text: 'Esa lectura es un punto de partida. Ahora viene la segunda mirada.' };
  const phrase = fillOpportunityTemplate(challenge.opportunity_template, oppBlanks);
  const stuck = /no s[eé]|no tengo idea|ayud[ae]|help|\?{2,}|^\s*$/i.test(deepenText);
  const insertExample = () => {
    const list = challenge.help_examples || [];
    if (!list.length) return;
    const next = list[exampleIndex % list.length];
    setDeepenText(next);
    setExampleIndex(exampleIndex + 1);
  };

  const completedIds = journey?.completed?.map(c => c.challengeId) || [];
  const nextChallenge = getNextChallenge(completedIds, challenge.id);

  const handleFinish = (goNext) => {
    finishChallenge({
      challengeId: challenge.id,
      completedAt: new Date().toISOString(),
      observation: selectedOption?.text || '',
      deepen: deepenText,
      opportunity: oppBlanks,
      opportunityPhrase: fillOpportunityTemplate(challenge.opportunity_template, oppBlanks)
    });
    if (goNext && nextChallenge) {
      navigate(`/challenge/${nextChallenge.id}`);
    } else if (!nextChallenge) {
      navigate('/journey');
    } else {
      navigate('/home');
    }
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, type: 'spring', bounce: 0.4 } },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
  };

  const ctaClass =
    'w-full bg-thinkers-orange text-white text-lg font-bold py-3.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:translate-y-0.5 transition-all disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ink';
  const ghostClass =
    'w-full bg-white text-ink text-lg font-bold py-3.5 rounded-full border-2 border-ink/10';

  return (
    <div className="min-h-screen bg-soft-surface text-ink flex flex-col items-center p-6 relative overflow-hidden">
      <header className="w-full max-w-md flex items-center gap-4 mt-4 z-20">
        <div className="flex-1 h-4 bg-ink/10 rounded-full overflow-hidden" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={5}>
          <motion.div
            className="h-full bg-thinkers-orange rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </header>

      <div className="w-full max-w-md z-10 flex-1 flex flex-col pt-16 overflow-y-auto">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-7">
              <div>
                <h1 className="text-2xl font-bold text-ink mb-3">{challenge.title}</h1>
                <p className="text-lg font-medium text-ink-muted bg-white p-4 rounded-2xl border-2 border-ink/10 shadow-sm leading-relaxed">
                  {challenge.scenario}
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-ink text-center">{challenge.question}</h2>
                <p className="text-sm font-bold text-ink-muted text-center">Elige una. Después vemos qué se suele pasar por alto.</p>
                {challenge.options.map((opt) => (
                  <button
                    key={opt.id}
                    disabled={isTransitioning}
                    onClick={() => selectAndAdvance(opt)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 font-semibold text-lg focus-visible:ring-2 focus-visible:ring-thinkers-orange ${
                      selectedOption?.id === opt.id
                        ? 'border-thinkers-orange bg-thinkers-orange/10'
                        : 'border-ink/10 bg-white hover:border-ink/30'
                    } disabled:pointer-events-none`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-6 text-center">
              <h1 className="text-2xl font-bold text-ink">{feedbackData.title}</h1>
              {selectedOption?.text && (
                <p className="text-sm font-medium text-ink-muted">
                  Elegiste: {selectedOption.text}
                </p>
              )}
              <p className="text-lg font-medium text-ink-muted bg-white p-6 rounded-3xl border-2 border-ink/10 shadow-sm leading-relaxed text-left">
                {feedbackData.text}
              </p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
              <h1 className="text-xl font-bold text-ink leading-relaxed">
                {challenge.deepen_prompt}
              </h1>
              <textarea
                value={deepenText}
                onChange={(e) => setDeepenText(e.target.value)}
                className="w-full text-lg font-medium bg-white border-2 border-ink/10 rounded-2xl p-6 focus:outline-none focus:border-thinkers-orange focus:ring-4 focus:ring-thinkers-orange/20 shadow-sm transition-all min-h-[150px]"
                placeholder="Escribe tu idea en 2 o 3 frases."
                aria-label="Tu idea"
                autoFocus
              />
              {(stuck || (challenge.help_examples && challenge.help_examples.length)) && (
                <div className="space-y-2">
                  {stuck && (
                    <p className="text-sm font-bold text-ink-muted text-center">
                      Si te trabas, pide un ejemplo y cámbialo con tu mundo.
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={insertExample}
                    className={ghostClass + ' text-thinkers-orange border-thinkers-orange'}
                  >
                    Dame un ejemplo
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-6">
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-ink">Arma tu oportunidad</h1>
                <p className="text-base text-ink-muted">Completa la frase.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border-2 border-ink/10 shadow-sm space-y-4">
                <p className="font-bold text-ink text-lg">{challenge.opportunity_template}</p>
                {challenge.opportunity_blanks.map((placeholder, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={placeholder}
                    aria-label={placeholder}
                    className="w-full text-lg font-medium bg-warm-canvas border-2 border-ink/10 rounded-xl p-4 focus:border-thinkers-orange outline-none focus:ring-4 focus:ring-thinkers-orange/20 transition-all"
                    value={oppBlanks[i] || ''}
                    onChange={e => updateBlank(i, e.target.value)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" variants={pageVariants} initial="initial" animate="animate" exit="exit" className="space-y-6 text-center">
              <h1 className="text-3xl font-bold text-ink">Reto superado</h1>
              <p className="text-lg text-ink-muted">Buen trabajo, {preferences?.name || 'innovador'}.</p>
              <div className="text-left space-y-3">
                {selectedOption?.text && (
                  <div className="bg-white p-4 rounded-2xl border-2 border-ink/10">
                    <p className="text-xs font-bold text-ink-muted uppercase mb-1">Tu mirada</p>
                    <p className="text-sm font-medium text-ink">{selectedOption.text}</p>
                  </div>
                )}
                {deepenText.trim() && (
                  <div className="bg-white p-4 rounded-2xl border-2 border-ink/10">
                    <p className="text-xs font-bold text-ink-muted uppercase mb-1">Tu idea</p>
                    <p className="text-sm font-medium text-ink">{deepenText}</p>
                  </div>
                )}
                <div className="bg-white p-4 rounded-2xl border-2 border-ink/10">
                  <p className="text-xs font-bold text-ink-muted uppercase mb-1">Tu oportunidad</p>
                  <p className="text-sm font-medium text-ink">{phrase}</p>
                </div>
                {challenge.close_feedback && (
                  <div className="bg-thinkers-orange/10 p-4 rounded-2xl border-2 border-thinkers-orange/30">
                    <p className="text-xs font-bold text-thinkers-orange uppercase mb-1">Cierre</p>
                    <p className="text-sm font-medium text-ink">{challenge.close_feedback}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step === 2 && (
        <div className="w-full max-w-md pt-4 pb-2">
          <button onClick={handleNext} className={ctaClass}>Entendido</button>
        </div>
      )}
      {step === 3 && (
        <div className="w-full max-w-md pt-4 pb-2">
          <button onClick={handleNext} disabled={!deepenText.trim()} className={ctaClass}>Continuar</button>
        </div>
      )}
      {step === 4 && (
        <div className="w-full max-w-md pt-4 pb-2">
          <button onClick={handleNext} disabled={oppBlanks.some(b => !b.trim())} className={ctaClass}>Completar reto</button>
        </div>
      )}
      {step === 5 && (
        <div className="w-full max-w-md pt-4 pb-2 space-y-3">
          {nextChallenge ? (
            <>
              <button onClick={() => handleFinish(true)} className={ctaClass}>Siguiente reto</button>
              <button onClick={() => handleFinish(false)} className={ghostClass}>Ir al inicio</button>
            </>
          ) : (
            <button onClick={() => handleFinish(false)} className={ctaClass}>Ver mi recorrido</button>
          )}
        </div>
      )}
    </div>
  );
}

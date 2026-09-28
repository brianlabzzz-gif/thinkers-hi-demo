import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FULL = 'THINKERS HI.';

export default function Welcome() {
  const navigate = useNavigate();
  const [typed, setTyped] = useState('');
  const [showRest, setShowRest] = useState(false);

  const skipToEnd = () => {
    setTyped(FULL);
    setShowRest(true);
  };

  useEffect(() => {
    if (typed === FULL) {
      const t = setTimeout(() => setShowRest(true), 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTyped(FULL.slice(0, typed.length + 1));
    }, typed.length === 0 ? 400 : 70);
    return () => clearTimeout(t);
  }, [typed]);

  return (
    <div
      className="min-h-screen bg-thinkers-orange flex flex-col items-center justify-between px-7 pt-20 pb-12"
      onClick={skipToEnd}
      role="presentation"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-sm">
        <h1 className="text-[36px] font-semibold text-white tracking-tight min-h-[48px]">
          {typed}
          {typed !== FULL && (
            <span className="inline-block w-[10px] h-[10px] bg-white ml-1 align-middle mb-1" />
          )}
        </h1>

        <AnimatePresence>
          {showRest && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="mt-4 text-lg font-normal text-white/90"
            >
              El espacio para la innovación humana.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="w-full max-w-sm">
        <AnimatePresence>
          {showRest && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: 'easeOut' }}
              onClick={(e) => {
                e.stopPropagation();
                navigate('/onboarding');
              }}
              className="w-full bg-white text-thinkers-orange text-lg font-bold py-3.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.12)] active:translate-y-0.5"
            >
              Comenzar
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

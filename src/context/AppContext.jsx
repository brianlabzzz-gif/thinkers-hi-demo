import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

const emptyJourney = {
  inProgress: null,
  inProgressStep: 1,
  inProgressDraft: {
    selectedOptionId: null,
    deepenText: '',
    oppBlanks: []
  },
  completed: []
};

const getSafe = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

const normalizeJourney = (raw) => {
  if (!raw || typeof raw !== 'object') return { ...emptyJourney };
  return {
    inProgress: raw.inProgress ?? null,
    inProgressStep: raw.inProgressStep || 1,
    inProgressDraft: {
      selectedOptionId: raw.inProgressDraft?.selectedOptionId ?? null,
      deepenText: raw.inProgressDraft?.deepenText ?? '',
      oppBlanks: Array.isArray(raw.inProgressDraft?.oppBlanks) ? raw.inProgressDraft.oppBlanks : []
    },
    completed: Array.isArray(raw.completed) ? raw.completed : []
  };
};

export const AppProvider = ({ children }) => {
  const [onboarded, setOnboarded] = useState(() => getSafe('thinkers_onboarded', false));

  const [preferences, setPreferences] = useState(() => getSafe('thinkers_preferences', {
    name: null, interest: null, context: null, help: null
  }));

  const [journey, setJourney] = useState(() => normalizeJourney(getSafe('thinkers_journey', emptyJourney)));

  useEffect(() => {
    localStorage.setItem('thinkers_onboarded', JSON.stringify(onboarded));
  }, [onboarded]);

  useEffect(() => {
    localStorage.setItem('thinkers_preferences', JSON.stringify(preferences));
  }, [preferences]);

  useEffect(() => {
    localStorage.setItem('thinkers_journey', JSON.stringify(journey));
  }, [journey]);

  const completeOnboarding = (prefs) => {
    setPreferences(prefs);
    setOnboarded(true);
  };

  const startChallenge = (id) => {
    setJourney(prev => {
      if (prev.inProgress === id) return prev;
      return {
        ...prev,
        inProgress: id,
        inProgressStep: 1,
        inProgressDraft: {
          selectedOptionId: null,
          deepenText: '',
          oppBlanks: []
        }
      };
    });
  };

  const saveChallengeProgress = (id, step, draft) => {
    setJourney(prev => ({
      ...prev,
      inProgress: id,
      inProgressStep: step,
      inProgressDraft: {
        selectedOptionId: draft?.selectedOptionId ?? prev.inProgressDraft?.selectedOptionId ?? null,
        deepenText: draft?.deepenText ?? prev.inProgressDraft?.deepenText ?? '',
        oppBlanks: draft?.oppBlanks ?? prev.inProgressDraft?.oppBlanks ?? []
      }
    }));
  };

  const finishChallenge = (result) => {
    setJourney(prev => ({
      inProgress: null,
      inProgressStep: 1,
      inProgressDraft: {
        selectedOptionId: null,
        deepenText: '',
        oppBlanks: []
      },
      completed: [result, ...prev.completed.filter(c => c.challengeId !== result.challengeId)]
    }));
  };

  const resetAll = () => {
    localStorage.removeItem('thinkers_onboarded');
    localStorage.removeItem('thinkers_preferences');
    localStorage.removeItem('thinkers_journey');
    window.location.href = '/';
  };

  return (
    <AppContext.Provider value={{
      onboarded, completeOnboarding,
      preferences,
      journey, startChallenge, saveChallengeProgress, finishChallenge,
      resetAll
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

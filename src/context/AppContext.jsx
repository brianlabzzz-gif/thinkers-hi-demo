import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

const getSafe = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

export const AppProvider = ({ children }) => {
  const [onboarded, setOnboarded] = useState(() => getSafe('thinkers_onboarded', false));

  const [preferences, setPreferences] = useState(() => getSafe('thinkers_preferences', {
    name: null, interest: null, context: null, help: null
  }));

  const [journey, setJourney] = useState(() => getSafe('thinkers_journey', {
    inProgress: null,
    completed: []
  }));

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
    setJourney(prev => ({ ...prev, inProgress: id }));
  };

  const finishChallenge = (result) => {
    setJourney(prev => ({
      inProgress: null,
      // Deduplicate: replace previous completion of same challenge
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
      journey, startChallenge, finishChallenge,
      resetAll
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

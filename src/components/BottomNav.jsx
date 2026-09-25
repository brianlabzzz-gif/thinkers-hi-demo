import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { path: '/home', label: 'Inicio', icon: '🏠' },
  { path: '/explore', label: 'Explorar', icon: '🧭' },
  { path: '/journey', label: 'Recorrido', icon: '📋' }
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-ink/10 z-50 px-4 py-2 safe-area-pb" aria-label="Navegación principal">
      <div className="max-w-md mx-auto flex justify-around items-center">
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={tab.label}
              className={`flex flex-col items-center py-2 px-4 rounded-xl transition-all min-w-[72px] focus-visible:ring-2 focus-visible:ring-thinkers-orange ${
                isActive 
                  ? 'text-thinkers-orange' 
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              <span className="text-2xl mb-1" aria-hidden="true">{tab.icon}</span>
              <span className={`text-xs font-bold ${isActive ? 'text-thinkers-orange' : ''}`}>
                {tab.label}
              </span>
              {isActive && (
                <div className="w-6 h-1 bg-thinkers-orange rounded-full mt-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

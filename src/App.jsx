import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Welcome from './views/Welcome';
import Onboarding from './views/Onboarding';
import Home from './views/Home';
import Explore from './views/Explore';
import Journey from './views/Journey';
import Challenge from './views/Challenge';

const ProtectedRoute = ({ children }) => {
  const { onboarded } = useAppContext();
  if (!onboarded) return <Navigate to="/" replace />;
  return children;
};

const PublicRoute = ({ children }) => {
  const { onboarded } = useAppContext();
  if (onboarded) return <Navigate to="/home" replace />;
  return children;
};

function AppRoutes() {
  const { onboarded } = useAppContext();
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Welcome /></PublicRoute>} />
      <Route path="/onboarding" element={<PublicRoute><Onboarding /></PublicRoute>} />
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
      <Route path="/journey" element={<ProtectedRoute><Journey /></ProtectedRoute>} />
      <Route path="/challenge/:id" element={<ProtectedRoute><Challenge /></ProtectedRoute>} />
      <Route path="*" element={<Navigate to={onboarded ? "/home" : "/"} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

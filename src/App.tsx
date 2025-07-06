import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';
import { MainLayout } from './components/layout/MainLayout';

// Lazy load pages
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Team = React.lazy(() => import('./pages/team/Team'));
const Profile = React.lazy(() => import('./pages/profile/Profile'));
const Stats = React.lazy(() => import('./pages/stats/Stats'));
const Onboarding = React.lazy(() => import('./pages/onboarding/Onboarding'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />
            <Route
              path="/*"
              element={
                <MainLayout>
                  <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="team" element={<Team />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="stats" element={<Stats />} />
                  </Routes>
                </MainLayout>
              }
            />
            <Route path="/onboarding" element={<Onboarding />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

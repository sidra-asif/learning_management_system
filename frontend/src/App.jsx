import React, { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Auth from './components/Auth/Auth';
import Sidebar from './components/Layout/Sidebar';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import './App.css';

function App() {
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);

  const handleNavigate = (newView) => {
    setView(newView);
  };

  const handleAuthSuccess = (role) => {
    setUser({ role, username: role.charAt(0).toUpperCase() + role.slice(1) + ' User' });
    setView('dashboard');
    setActiveTab('overview');
  };

  const handleLogout = () => {
    setUser(null);
    setView('landing');
  };

  const isDashboard = view === 'dashboard';

  return (
    <div className={`app-root ${isDashboard ? 'app-layout' : ''}`}>
      {isDashboard && (
        <Sidebar
          user={user}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={handleLogout}
        />
      )}

      <main className={isDashboard ? 'main-content' : 'full-page'}>
        {view === 'landing' && <LandingPage onNavigate={handleNavigate} />}
        {(view === 'login' || view === 'register') && (
          <Auth
            mode={view}
            onNavigate={handleNavigate}
            onAuthSuccess={handleAuthSuccess}
          />
        )}
        {view === 'dashboard' && (
          user?.role === 'teacher' ? (
            <TeacherDashboard activeTab={activeTab} />
          ) : (
            <StudentDashboard activeTab={activeTab} />
          )
        )}
      </main>
    </div>
  );
}

export default App;

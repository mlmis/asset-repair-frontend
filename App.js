// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NewRepairRequestPage from './pages/NewRepairRequestPage';
import AssetTypeListPage from './pages/AssetTypeListPage';
import AssetListPage from './pages/AssetListPage';
import RepairListPage from './pages/RepairListPage';
import Navbar from '../components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUser({ email: 'admin@example.com' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/new-repair" element={isLoggedIn ? <NewRepairRequestPage /> : <Navigate to="/login" />} />
        <Route path="/asset-types" element={isLoggedIn ? <AssetTypeListPage /> : <Navigate to="/login" />} />
        <Route path="/assets" element={isLoggedIn ? <AssetListPage /> : <Navigate to="/login" />} />
        <Route path="/repairs" element={isLoggedIn ? <RepairListPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

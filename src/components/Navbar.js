// frontend/src/components/Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Asset Repair System</h2>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={onLogout} style={{ marginLeft: '1rem' }}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')} style={{ marginLeft: '1rem' }}>Register</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

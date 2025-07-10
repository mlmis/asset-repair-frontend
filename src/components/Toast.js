// frontend/src/components/Toast.js
import React, { useEffect } from 'react';

function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const styles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: type === 'success' ? '#4CAF50' : '#f44336',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '5px',
    zIndex: 1000,
    transition: 'opacity 1s ease-out'
  };

  return <div style={styles}>{message}</div>;
}

export default Toast;

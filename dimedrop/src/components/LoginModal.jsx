import React, { useState } from 'react';
import '../css/LoginModal.css';

const LoginModal = ({ show, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');   
  const encodedUsername = btoa('admin'); // "YWRtaW4="
  const encodedPassword = btoa('admin'); // "cGFzc3dvcmQxMjM="

  const handleLogin = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      onLogin();  // updates auth state in App
      onClose();
    } else {
      setErrorMsg(data.message || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    setErrorMsg('Login failed. Try again later.');
  }
};

  const handleClose = () => {
    setErrorMsg('');
    setUsername('');
    setPassword('');
    onClose();
  };


  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box pixel-border">
        <h2 className="modal-title">Welcome !</h2>
        {errorMsg && (
          <div className="error-banner">
            {errorMsg}
          </div>
        )}
        <input
          type="text"
          className="pixel-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="pixel-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="modal-actions">
          <button className="pixel-button" onClick={handleLogin}>Login</button>
          <button className="pixel-button" onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

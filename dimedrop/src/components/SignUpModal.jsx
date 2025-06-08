import React, { useState } from 'react';
import '../css/LoginModal.css'; // Reuse styling

const SignupModal = ({ show, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        setSuccessMsg("Signup successful!");
        setErrorMsg('');
        setTimeout(() => {
          onClose(); // Close after success
        }, 1500);
      } else {
        const data = await response.json();
        setErrorMsg(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMsg("Signup failed. Try again later.");
    }
  };

  const handleClose = () => {
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setErrorMsg('');
    setSuccessMsg('');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box pixel-border">
        <h2 className="modal-title">Sign Up</h2>

        {errorMsg && <div className="error-banner">{errorMsg}</div>}
        {successMsg && <div className="success-banner">{successMsg}</div>}

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
        <input
          type="password"
          className="pixel-input"
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="modal-actions">
          <button className="pixel-button" onClick={handleSignup}>Sign Up</button>
          <button className="pixel-button" onClick={handleClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;

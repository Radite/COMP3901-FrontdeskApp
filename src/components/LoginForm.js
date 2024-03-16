// LoginForm.js
import React, { useState } from 'react';
import '../styles/LoginForm.css';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {error && <div className="error-message">{error}</div>}
      <button className="form-button" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

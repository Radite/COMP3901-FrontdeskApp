// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LoginForm from './LoginForm';
import '../styles/LoginPage.css';

const LoginPage = ({ handleLogin }) => {
  return (
    <div className="login-page-container">
      <h2>Login</h2>
      <div className="login-form-container">
        <LoginForm onSubmit={handleLogin} />
      </div>
      <Link to="/forgot-password">Forgot Password?</Link> {/* Use Link to navigate to /forgot-password */}
    </div>
  );
};

export default LoginPage;

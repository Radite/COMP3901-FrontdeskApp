// ForgotPasswordPage.js
import React from 'react';
import '../styles/ForgotPassword.css';

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-page-container">
      <h2>Forgot Password</h2>
      <p>Please enter your email address to reset your password.</p>
      <form className="forgot-password-form">
        <input className="form-input" type="email" placeholder="Email" />
        <button className="form-button" type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;

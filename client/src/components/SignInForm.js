// SignInForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './FormStyles.css'; // Import your CSS file for styling

const SignInForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Here you can implement your sign in logic
    console.log("Signing in...");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSignIn} className="mt-4 form-container">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-center">Sign In</button>
      <p className="mt-2 mb-0">
        <Link to="#" className="link-button forgot-link" onClick={(e) => e.preventDefault()}>Forgot Password?</Link>
      </p>
    </form>
  );
};

export default SignInForm;

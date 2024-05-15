// SignUpForm.js
import React, { useState } from 'react';
import './FormStyles.css'; // Import your CSS file for styling

const SignUpForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    // Here you can implement your sign up logic
    console.log("Signing up...");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSignUp} className="mt-4 form-container">
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
      <button type="submit" className="btn btn-center">Sign Up</button>
    </form>
  );
};

export default SignUpForm;

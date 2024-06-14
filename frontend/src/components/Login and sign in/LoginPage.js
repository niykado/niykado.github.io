import React, { useState } from 'react';
import SignUpForm from './SignUpForm'; // Assuming SignUpForm is in a separate file
import SignInForm from './SignInForm'; // Assuming SignInForm is in a separate file
import './LoginPage.css'; // Import your CSS file for styling

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(prevState =>!prevState);
  };

  return (
    <div className="login-page">
      <div className="login-page-row"> {/* Adjusted class name for consistency */}
        <div className="login-page-col">
          <div className="login-page-left-info">
            <h2>Welcome!</h2>
            <p>{isSignup? "Sign Up" : "Sign In"}</p>
          </div>
        </div>
        <div className="login-page-col">
          <div className="login-page-right-info">
            {isSignup? (
              <SignUpForm toggleForm={toggleForm} />
            ) : (
              <SignInForm toggleForm={toggleForm} />
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

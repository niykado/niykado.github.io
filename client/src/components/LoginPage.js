import React, { useState } from 'react';
import SignUpForm from './SignUpForm'; // Assuming SignUpForm is in a separate file
import SignInForm from './SignInForm'; // Assuming SignInForm is in a separate file
import './LoginPage.css'; // Import your CSS file for styling

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(true);

  const toggleForm = () => {
    setIsSignup(prevState => !prevState);
  };

  return (
    <div className="login-page">
      <div className="row">
        <div className="col-sm-6">
          <div className="left-info">
            <h2>Welcome!</h2>
            <p>{isSignup ? "Sign Up" : "Sign In"}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="right-info">
            {/* Pass toggleForm as a prop to both SignInForm and SignUpForm */}
            {isSignup ? <SignUpForm toggleForm={toggleForm} /> : <SignInForm toggleForm={toggleForm} />}
            {/* Add link to switch between sign-in and sign-up */}
            <div className="switch-link">
              <p>{isSignup ? "Already have an account? " : "Don't have an account? "}
                <button className='switch-btn' onClick={toggleForm}>{isSignup ? "Sign in" : "Sign up"}</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

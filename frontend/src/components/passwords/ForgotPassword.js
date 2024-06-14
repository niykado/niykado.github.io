import React, { useState } from "react";
import "./forgotpassword.css";
import axiosInstance from '../../hooks/axiosInstance';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      const res = await axiosInstance.post("/api/user/forgotpassword", { email });
      setMessage(res.data.message || "Check your email inbox for the reset link");
      if (res.data.status) {
        navigate("/Login");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred, try again");
      console.log(error);
    }
  };

  return (
    <div className="ff-forgot-password-container">
      <form onSubmit={handleSubmit} className="ff-forgot-password-form">
        <h2 className="ff-h2">Forgot Password</h2>
        {error && <p className="ff-error-message">{error}</p>}
        {message && <p className="ff-message">{message}</p>}
        <label htmlFor="email" className="ff-label">Please enter your email address used to create the account:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="ff-input"
        />
        <button type="submit" className="ff-submit-btn">Send Reset Link</button>
        <button type="button" onClick={() => navigate('/Login')} className="ff-back-to-login-btn">Back to Login</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

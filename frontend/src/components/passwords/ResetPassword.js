import React, { useState } from "react";
import "./resetpassword.css";
import axiosInstance from "../../hooks/axiosInstance";
import { useNavigate, useParams, Link } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await axiosInstance.put(`/api/user/resetpassword/${token}`, { password });
      setMessage("Your password has been reset successfully.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rp-page-container">
      <div className="rp-reset-password-container">
        <form onSubmit={handleSubmit} className="rp-reset-password-form">
          <h2 className="rp-h2">Reset Password</h2>
          <label htmlFor="password" className="rp-label">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
            className="rp-input"
          />
          <label htmlFor="confirmPassword" className="rp-label">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength="6"
            className="rp-input"
          />
          {error && <p className="rp-message rp-error">{error}</p>}
          <button type="submit" disabled={loading} className="rp-submit-btn">
            {loading ? "Resetting..." : "Reset Password"}
          </button>
          {message && <p className="rp-message rp-success">{message}</p>}
          <Link to='/forgot-password' className="rp-link-style">Send New Link</Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

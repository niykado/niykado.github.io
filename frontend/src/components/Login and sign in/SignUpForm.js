import React, { useContext, useState } from "react";
import "./FormStyles.css";
import axiosInstance from "../../hooks/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const SignUpForm = ({ toggleForm }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // Optional: Include if needed
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleSignUp = async (event) => {
    event.preventDefault();
    dispatch({ type: "START" });

    try {
      const response = await axiosInstance.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch({ type: "SUCCESS", payload: token });
      navigate("/");
    } catch (error) {
      dispatch({ type: "FAILURE", payload: error.response.data.error });
      console.log(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="mt-4 form-container">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          required
        />
      </div>
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
      {error? <p className="error-message">Use new Email</p> : ""}
      <button disabled={loading} type="submit" className="btn btn-center">
        Sign Up
      </button>
      <div className="login-page-switch-link">
        <p className="mt-2 mb-0">
          Already have an account?{' '}
          <button className="login-page-switch-btn" onClick={toggleForm}>
            Sign in
          </button>
        </p>
      </div>
    </form>
  );
};

export default SignUpForm;

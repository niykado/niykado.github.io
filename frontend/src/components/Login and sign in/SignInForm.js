import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./FormStyles.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../hooks/axiosInstance";
import { jwtDecode } from "jwt-decode";

const SignInForm = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch, error } = useContext(AuthContext);

  const handleSignIn = async (event) => {
    event.preventDefault();
    const data = { email, password };
    dispatch({ type: "START" });

    try {
      const response = await axiosInstance.post("/api/auth/login", data);

      if (response.data) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        dispatch({ type: "SUCCESS", payload: token });
        const checkAdminOrUser = jwtDecode(token);
        console.log(checkAdminOrUser);
        if (checkAdminOrUser?.user?.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Invalid login credentials.");
        dispatch({ type: "FAILURE", payload: "Invalid login credentials" });
      } else {
        console.error("Login error:", error);
        dispatch({ type: "FAILURE", payload: "Login error" });
      }
    }
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
      {error? (<p className="error-message" >{error}</p>) : ""}
      <button type="submit" className="btn btn-center">Sign In</button>
      <div className="login-page-switch-link">
        <p className="mt-2 mb-0">
          Don't have an account?{' '}
          <button className="login-page-switch-btn" onClick={toggleForm}>
            Sign up
          </button>
        </p>
        <p className="forgot-link">
          <Link to="/forgot-password"  >
            Forgot Password?
          </Link>
        </p>
      </div>
      
    </form>
  );
};

export default SignInForm;

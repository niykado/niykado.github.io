// src/Logout.js
import React, { useContext }  from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext.js";
const Logout = () => {
    const navigate=useNavigate()
    const { dispatch } = useContext(AuthContext);
  const handleLogout = (e) => {
   e.preventDefault()
  
    dispatch({type:"LOGOUT"})
    navigate("/login")
   
  };

  return (
    <div className="containers">
      <h1 className="headings">Logout</h1>
      <p className="messages">Are you sure you want to logout?</p>
      <button className="buttons" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;

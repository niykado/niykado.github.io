// Dashboard.js
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './dashboard.css'

const Dashboard = () => {
  const { loading, data, error } = useFetch("/api/user/getuserdata");
  const navigate=useNavigate()
  const handleUserDetails = (user) => {
    navigate("/details/user", { state: { user } });
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="dashboard-container">
      <header className="top-bar">
        <h1>Admin Dashboard</h1>
      </header>

      <main className="content-area">
        <div className="user-info">
          {data?.map((user) => (
            <div key={user._id} className="user-card">
              <h2>{user.username}</h2>
              <p>Email: {user.email}</p>
              <p>Products Prebooked: {user.prebook ? user.prebook.length : 0}</p>
           
        
              <button
                className="btn view-details" style={ {backgroundColor:user.prebook&& user.prebook.length?"green":"grey"}}
                onClick={() => handleUserDetails(user)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

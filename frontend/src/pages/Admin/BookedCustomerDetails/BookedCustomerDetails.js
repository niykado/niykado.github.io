import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./BookedCustomerDetails.css"; // Import the CSS file

const BookedCustomerDetails = () => {
  const { data ,loading,error} = useFetch('/api/prebook');
  const location = useLocation();
  const { user } = location.state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  // Check if location and location.state are defined
  if (!location || !location.state) {
    return <div className="user-details-container">Error: User details not found.</div>;
  }

  if (!user) {
    return <div className="user-details-container">Error: User details not found.</div>;
  }

  // Filter the data array to include only the prebooked items
  const onlyBooked = data.filter((item) => user.prebook.includes(item._id));

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-details">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <div className="prebooked-items">
        <h3>Prebooked Items:</h3>
        <ul className="prebook-list">
          {onlyBooked.map((item, i) => (
            <li key={i} className="prebook-item">
              <div className="product-details">
                <p><strong>Product name:</strong> {item.name}</p>
                <p><strong>Type:</strong> {item.type}</p>
                <p><strong>Category:</strong> {item.category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookedCustomerDetails;

import React, { useContext } from "react";
import "./product.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axiosInstance from "../../hooks/axiosInstance";

const Product = ({ product }) => {

  const { user, dispatch } = useContext(AuthContext);
  console.log(product);
  const MakeUnBook = true;
  const navigate = useNavigate();

  const id = product?._id;
  const isPrebooked = user && user.prebook && user.prebook.includes(id);

  const handleProductDetails = () => {
    navigate("/product-details", { state: { product } });
  };

  const handlePreBook = async (e) => {

    if (!user) {
      navigate("/login");
      return;
    }
    try {
      console.log(id, ":", user.id);

      const response = await axiosInstance.post(
        `/api/prebook/${id}/${user.id}`
      );

      if (response.data) {
        const updatedUser = {
          ...user,
          prebook: [...(user.prebook || []), id],
        };
        console.log(updatedUser);
        dispatch({ type: "PRE_BOOK", payload: updatedUser });
      }
    } catch (error) {
      console.error("Error during pre-booking:", error);
    }
  };

  const handleUnBook = async (e) => {

    if (!user) {
      navigate("/login");
      return;
    }
    try {
      console.log(id, ":", user.id);
      const response = await axiosInstance.delete(
        `/api/prebook/${id}/${user.id}`
      );
      const updatedPreBook = user.prebook.filter((item) => item !== id);
      if (response.data) {
        const updatedUser = { ...user, prebook: updatedPreBook };
        dispatch({ type: "PRE_BOOK", payload: updatedUser });
      }
    } catch (error) {
      console.error("Error during un-booking:", error);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          className="product-image"
          src={`/category/${product.category}/${product.name}.jpg`}
          alt="Product"
        />
        <div className="product-info">
          <div className="product-info-left">
            <h5 className="product-name">{product.name}</h5>
            <p className="product-desc">Type:{product.type}</p>
            <p className="product-desc">{product.desc}</p>
            <p className="product-price">${product.rate}</p>
            <div className="button-wrapper">
              <button
                className="btn view-details"
                onClick={handleProductDetails}
              >
                View Details
              </button>
              <button
                className="btn pre-book"
             
                onClick={handlePreBook}
                disabled={isPrebooked}
              >
                {isPrebooked ? "Booked" : "PRE-ORDER"}
              </button>
              {isPrebooked && MakeUnBook && (
                <button
                  className="btn un-book"
                 
                  onClick={ handleUnBook}
                >
                  UN-ORDER
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React, { useState ,useContext} from 'react';
import { useLocation } from 'react-router-dom';
import './productDeatils.css';
import { AuthContext } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../hooks/axiosInstance';
const ProductCard = () => {
  const navigate=useNavigate()
  const MakeUnBook=true;
  const location = useLocation();
  const { product } = location.state;
const {user,dispatch}=useContext(AuthContext)
 
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [
    "https://via.placeholder.com/1900x800",
    "https://via.placeholder.com/1900x800",
    "https://via.placeholder.com/1900x800",
    "https://via.placeholder.com/1900x800"
  ];

  const id = product._id;
  const isPrebooked = user && user.prebook && user.prebook.includes(id);
   
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
      <div className="cards-wrappers">
        <div className="cards">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase" style={{ transform: `translateX(-${selectedImage * 100}%)` }}>
                {images.map((img, index) => (
                  <img key={index} src={img} alt={`product_image ${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="img-select">
              {images.map((img, index) => (
                <div key={index} className="img-item">
                  <a href="#exampel" onClick={(e) => { e.preventDefault(); setSelectedImage(index); }} data-id={index + 1}>
                    <img src={img} alt={`product thumbnail ${index + 1}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="product-content"> 
            <h2 className="product-title">{product.name}</h2>
            <div className="product-rating">
              <span>4.7 (21)</span>
            </div>
            <div className="product-price">
            
              <p className="new-price">Price: <span>${product.rate} (5%)</span></p>
             
            </div>
            <div className="product-detail">
              <h2>About this item:</h2>
              <p>{product.desc}Experience the pinnacle of engineering with our state-of-the-art engine, designed for optimal performance and efficiency. Crafted with precision, this engine offers unparalleled power and reliability for all your automotive needs. Whether you're cruising on the highway or tackling tough terrains, our engine ensures a smooth and powerful ride. Built to last, it features advanced technology that minimizes emissions and maximizes fuel efficiency. Easy to install and maintain, it's the perfect upgrade for any vehicle. Trust in quality, trust in performance – choose our engine for a superior driving experience.  </p>
              <ul>
                <li>Available: <span>soon</span></li>
                <li>Category: <span>{product.category}</span></li>
                <li>Shipping Area: <span>India</span></li>
                <li>Shipping Fee: <span>Free</span></li>
              </ul>
            </div>
            <div className="purchase-info">
              <button type="button" className="btn pre-book" onClick={() => handlePreBook(id)} disabled={isPrebooked}>
                {isPrebooked ? "Booked" : "PRE-ORDER"}
              </button>
              {isPrebooked && MakeUnBook && (
                <button type="button" className="btn un-book" onClick={() => handleUnBook(id)}>
                  UN-ORDER
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
     
   
  );
};

export default ProductCard;
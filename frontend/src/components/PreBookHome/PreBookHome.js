import React, { useState, useEffect } from "react";
import "./PreBookHome.css";

import { Link } from "react-router-dom";
import category from "./CategoryData";
const PreBookHome = () => {
  // const { data, loading, reFetch } = useFetch('/api/prebook');
  // const [categories, setCategories] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);

  // useEffect(() => {
  //   if (!data) {
  //     reFetch();
  //   }
  // }, [data, reFetch]);

  // useEffect(() => {
  //   if (data) {
  //     const uniqueCategories = [...new Set(data.map((product) => product.category))];
  //     setCategories(uniqueCategories);
  //   }
  // }, [data]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(7);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const slides = document.querySelectorAll(".pre-order-slide");
    slides.forEach((slide, index) => {
      slide.classList.remove("slide-in");
      // Trigger reflow to restart animation
      void slide.offsetWidth;
      slide.classList.add("slide-in");
      slide.style.animationDelay = `${index * 0.1}s`;
    });
  }, [currentPage, itemsPerPage]);

  const handlePrevClick = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0
        ? Math.ceil(category.length / itemsPerPage) - 1
        : prevPage - 1
    );
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) =>
      prevPage === Math.ceil(category.length / itemsPerPage) - 1
        ? 0
        : prevPage + 1
    );
  };

  const currentItems = category.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  //   if (loading) return   <div className="loading-spinner">
  //   <div className="spinner"> </div>
  // </div>;

  return (
    <div className="pre-order-container" id="preorder">
      <h1 className="pre-order-title text preOrderText mb-5x">Pre Order</h1>
      <div className="pre-order-slider">
        <div className="pre-order-slides">
          {currentItems.map((item, index) => (
            <div key={index} className="pre-order-slide">
              <Link to={`/prebook/${item}`}>
                <img
                  src="https://via.placeholder.com/300"
                  alt={item}
                  className="pre-order-placeholder-image"
                />
              </Link>
              <p className="pre-order-item-label">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pre-order-nav">
        <p className="pre-order-current-item"> Slide NO :{currentPage + 1}</p>
        <div className="pre-order-nav-buttons">
          <button
            className="pre-order-nav-button pre-order-prev-button"
            onClick={handlePrevClick}
          >
            &lt;
          </button>
          <button
            className="pre-order-nav-button pre-order-next-button"
            onClick={handleNextClick}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreBookHome;

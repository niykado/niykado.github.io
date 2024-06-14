import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { AuthContext } from '../../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { data } = useFetch("/api/prebook");
  const { user } = useContext(AuthContext);

  // State to store categories and their corresponding types
  const [categoryTypes, setCategoryTypes] = useState({});

  // Effect to update categoryTypes when data changes
  useEffect(() => {
    if (data) {
      const categoryTypesMap = {};
      // Loop through the data to populate categoryTypes
      data.forEach(product => {
        if (!categoryTypesMap[product.category]) {
          // If the category is not yet in the map, initialize it with an empty array
          categoryTypesMap[product.category] = [];
        }
        // Add the type to the corresponding category
      });
      // Update the state with the new categoryTypesMap
      setCategoryTypes(categoryTypesMap);
    }
  }, [data]);

  // State and effect for handling navbar scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // State and toggle function for submenu
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Function to close the navbar collapse on item click
  const closeNavbar = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <Link className="navbar-brand nav-title ms-5" to="/" onClick={closeNavbar}>
          <img src="/logo.png" alt="logo" className="img-fluid brandLogo" />
          NIYKADO
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              <Link className="nav-link" to="/newssection">News</Link>
            </li>
            <li className={`nav-item dropdown ${isSubmenuOpen ? 'show' : ''}`} onMouseEnter={toggleSubmenu} onMouseLeave={toggleSubmenu}>
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pre-order</Link>
              <ul className="dropdown-menu">
                {Object.keys(categoryTypes)?.map((category, index) => (
                  <li className="dropdown-submenu" key={category} onClick={closeNavbar}>
                    <Link className="dropdown-item" to={`/prebook/${category}` }>
                      <img src="/arrow.svg" alt="Arrow" className="submenu-icon img-fluid" style={{ maxWidth: '16px', maxHeight: '16px' }} />
                      {category}
                    </Link>
                  
                  </li>
                ))}
              </ul>
            </li>
            <li className="nav-item" onClick={closeNavbar}>
              {
                !user ? (
                  <Link className="btn btnpreorder" to="/login">Login</Link>
                ) : (
                  <Link className="btn btnpreorder" to="/logout">Logout</Link>
                )
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
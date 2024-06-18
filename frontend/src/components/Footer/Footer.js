import React from 'react';
import './Footer.css'; // Make sure to import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-4 footer-icon">
            <img className="footer-logo " src="/logo.png" alt="CompanyLogo" />
            <h5 className="footer-title">NIYKADO</h5>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Social Media</h5>
            <ul className="list-unstyled">
              <li className="footer-item">
                <a href="#facebook" className="footer-link">
                  <img src="/facebook.png" alt="Facebook" className="social-media-logo" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="footer-item">
                <a href="#twitter" className="footer-link">
                  <img src="/twitter.png" alt="Twitter" className="social-media-logo" />
                  <span>Twitter</span>
                </a>
              </li>
              <li className="footer-item">
                <a href="#instagram" className="footer-link">
                  <img src="/insta.png" alt="Instagram" className="social-media-logo" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Address</h5>
            <address className="footer-address">
              1234 Main St<br />
              City, State 12345<br />
              Country
            </address>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="footer-heading">Navigation</h5>
            <ul className="list-unstyled">
              <li className="footer-item"><a href="#account" className="footer-link">Account</a></li>
              <li className="footer-item"><a href="#preorder" className="footer-link">Preorder</a></li>
              <li className="footer-item"><a href="#contact" className="footer-link">Contact Us</a></li>
              <li className="footer-item"><a href="#about" className="footer-link">About Us</a></li>
              <li className="footer-item"><a href="#achievements" className="footer-link">Achievements</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="footer-divider" />
            <p className="text-center mt-4">
              &copy; 2024 NIYKADO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            {/* Company Logo and Name */}
            <div className="d-flex flex-column align-items-center">
              <img className='footer-logo' src="/logo.png" alt="Company Logo" width="100" height="100" />
              <h5 className="mt-3 mb-4">NIYKADO</h5>
            </div>
          </div>
          <div className="col-md-3">
            {/* Social Media Links */}
            <h5 className="mb-3">Social Media</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#facebook">
                  <img src="/facebook.png" alt="Facebook" width="30" height="30" />
                  <span className="ml-2">Facebook</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#twitter">
                  <img src="/twitter.png" alt="Twitter" width="30" height="30" />
                  <span className="ml-2">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#instagram">
                  <img src="/insta.png" alt="Instagram" width="30" height="30" />
                  <span className="ml-2">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            {/* Address */}
            <h5 className="mb-3">Address</h5>
            <address>
              1234 Main St<br />
              City, State 12345<br />
              Country
            </address>
          </div>
          <div className="col-md-3">
            {/* Navigation Links */}
            <h5 className="mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li><a href="#account">Account</a></li>
              <li><a href="#preorder">Preorder</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#achievements">Achievements</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr className="bg-light" />
            <p className="text-center footer mt-4">
              &copy; 2024 NIYKADO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

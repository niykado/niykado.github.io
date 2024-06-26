import React from 'react';
import './Help.css';

export default function Help() {
  return (
    <div className='help'>
      <h2 className="text helpText">How can we help</h2>
      <div className="d-flex flex-row">
        <div className="card card-help">
          <img src="https://via.placeholder.com/400x400" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Pre order</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#preorder" className="btn btnpreorder-2">Pre-order</a>
          </div>
        </div>
        <div className="card card-help">
          <img src="https://via.placeholder.com/400x400" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Products</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#ddd" className="btn btnpreorder-2">View Products</a>
          </div>
        </div>
        <div className="card card-help">
          <img src="https://via.placeholder.com/400x400" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Repair</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#ddd" className="btn btnpreorder-2">Book a servicing</a>
          </div>
        </div>
      </div>
    </div>
  );
}
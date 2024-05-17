import React from 'react';
import { Link } from 'react-router-dom';

const InformationSection = () => {
  return (
    <div className="container">
      <h2 className="text-center news helpingText p-5">News</h2>
      <div className="row justify-content-center ms-5">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-news-long h-100" style={{ width: '400px', height: '621px' }}>
            <img src="https://via.placeholder.com/400x621" className="card-img-top" alt="Long Rectangle Image" />
            <div className="card-body card-body-custom">
            <Link to="/newssection"><a href="#" className="btn btntype-1">Go to News</a></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="card card-news-square h-100" style={{ width: '300px', height: '300px' }}>
                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Square Image 1" />
                <div className="card-body card-body-custom">
                <Link to="/news"><a href="#" className="btn btntype-1">Achivements</a></Link>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-news-square h-100" style={{ width: '300px', height: '300px' }}>
                <img src="https://via.placeholder.com/300x300" className="card-img-top" alt="Square Image 2" />
                <div className="card-body card-body-custom">
                <Link to="/news"><a href="#" className="btn btntype-1">Future Events</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card card-news-long h-100" style={{ width: '400px', height: '621px' }}>
            <img src="https://via.placeholder.com/400x621" className="card-img-top" alt="Long Rectangle Image" />
            <div className="card-body card-body-custom">
            <Link to="/news"><a href="#" className="btn btntype-1">History</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;

// NewsDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import newsItems from './Data/ForEach'; // Assuming you have a separate news data file
import './NewsDetail.css'; // Import the CSS file for styling

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const newsItem = newsItems.find(item => item.id === parseInt(id));
  const handleBackClick = () => {
    navigate('/newssection'); // Navigate back to the news section
  };
  if (!newsItem) {
    return ( <div className="news-detail-container">

    <div  className="news-detail-title">News not found</div>
    <button onClick={handleBackClick} className="news-detail-back-button">Back to News Section</button>
  </div>)
   
  }

 

  return (
    <div className="news-detail-container">
      <h1 className="news-detail-title">{newsItem.title}</h1>
      <img className="news-detail-image" src={newsItem.imgSrc} alt={newsItem.title} />
      <p className="news-detail-text">{newsItem.text}</p>
      <button onClick={handleBackClick} className="news-detail-back-button">Back to News Section</button>
    </div>
  );
};

export default NewsDetail;
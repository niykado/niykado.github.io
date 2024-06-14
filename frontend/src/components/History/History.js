import React from 'react';
import './History.css';
import historyData from './historyData.json'; // Adjust the path according to your project structure

const ResponsiveHistory = () => {
  return (
    <div className="responsive-history-body">
      <main>
        <section className="responsive-history-timeline">
          {historyData.map((item, index) => (
            <div 
              className="responsive-history-timeline-item" 
              key={item.year} 
              id={`year-${item.year}`} 
              style={{ '--history-item-index': index }}
            >
              <div className="responsive-history-timeline-img">
                <img src="https://via.placeholder.com/150" alt={`${item.year}`} />
              </div>
              <div className="responsive-history-timeline-content">
                <h2>{item.year}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default ResponsiveHistory;

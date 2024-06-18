import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import PreBookHome from '../../components/PreBookHome/PreBookHome';
import Help from '../../components/Help section/Help';
import InformationSection from '../../components/Information seciton/InformationSection';

const HomePage = () => {
  return (
    <div className="homepage">
      <Carousel />
      <PreBookHome />
      <Help />
      <InformationSection />
    </div>
  );
};

export default HomePage;

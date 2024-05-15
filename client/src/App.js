import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Help from './components/Help';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import News from './components/News';
import SignUpForm from './components/SignUpForm'; // Import SignUpPage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Carousel />
          <Help />
          <NewsSection />
          <Footer />
        </>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpForm />} /> {/* Add route for SignUpPage */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage.js";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/Login and sign in/LoginPage";
import AboutUs from "./components/About Us/AboutUs";
import ContactUs from "./components/Contact Us/ContactUs";
import NewsSection from "./components/News/NewsSection";
import NewsDetail from "./components/News/NewsDetail";
import History from "./components/History/History";
import ForgotPassword from "./components/passwords/ForgotPassword";
import Logout from "./components/Logout/Logout";
import ResetPassword from "./components/passwords/ResetPassword";
import Prebook from "./pages/prebook/Prebook.js";
import ProductCard from "./pages/prebook/productDetails/productDeatils";
import Dashboard from "./pages/Admin/dashboard.js";
import BookedCustomerDetails from "./pages/Admin/BookedCustomerDetails/BookedCustomerDetails";
function App() {
  return (
    <Router>
    <div id="root" className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/newssection" element={<NewsSection />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/prebook/:category" element={<Prebook />} />
          <Route path="/product-details" element={<ProductCard />} />
          <Route path="/admin" element={<Dashboard/>}/>
          <Route path='/details/user' element={<BookedCustomerDetails/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;

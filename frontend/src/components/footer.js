import React, { useState, useEffect } from 'react';
import '../../src/styles.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faArrowUp} from '@fortawesome/fontawesome-free-solid';
import { Link } from "react-router-dom";
import {FaArrowUp} from "react-icons/fa";

function Footer(){
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <h3>Quick Links</h3>
        {showButton && (
          <button className="up-button" onClick={scrollToTop}>
          <FaArrowUp />
          </button>
        )}
      <div className="container foot">
        
        <div className="footer-links">
          
            <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/reachus">ReachUs</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

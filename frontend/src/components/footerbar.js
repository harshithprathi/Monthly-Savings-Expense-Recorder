import React, { useState, useEffect } from 'react';
import '../../src/styles.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faArrowUp} from '@fortawesome/fontawesome-free-solid';
import { Link } from "react-router-dom";
import {FaArrowUp} from "react-icons/fa";

function Footerbar(){
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
            <Link to="/dashboard">Home</Link>
            <Link to="/Piepage">Pie Diagrams</Link>
            <Link to="/GraphPage">Savings Graph</Link>
            <Link to="/Profilepage">Edit Profile</Link>
        </div>
        
      </div>
    </footer>
  );
};

export default Footerbar;

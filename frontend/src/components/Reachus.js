import React from "react";
import '../../src/styles.css';

function Reachus() {
  return (
    <div className="reachcontainer">
        <h2 className="contact-heading">Contact Us</h2>
    <div className="contact-container">
        
      
      <div className="card contactcards">
        <h3 className="cardh3">General Inquiries</h3>
        <p className="cardp">Email: rajaprathi@gmail.com</p>
        <p className="cardp">Phone: +91 123 456 7890</p>
      </div>
      <div className="card contactcards">
        <h3 className="cardh3">Customer Support</h3>
        <p className="cardp">Email: rajaprathi@gmail.com</p>
        <p className="cardp">Phone: +91 987 654 3210</p>
      </div>
      <div className="card contactcards">
        <h3 className="cardh3">Business Inquiries</h3>
        <p className="cardp">Email: rajaprathi@gmail.com</p>
        <p className="cardp">Phone: +91 555 123 4567</p>
      </div>
      
    </div>
    </div>
  );
};

export default Reachus;

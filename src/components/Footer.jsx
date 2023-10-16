// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2023 VESIT. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

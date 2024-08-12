// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Google LLC. All rights reserved.</p>
        <ul>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

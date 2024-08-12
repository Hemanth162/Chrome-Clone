// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="Chrome Logo" />
        <span>chrome</span>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">The Browser by Google</a></li>
          <li><a href="/">Features</a></li>
          <li><a href="/">Support</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

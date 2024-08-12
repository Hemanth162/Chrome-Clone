// src/components/MainSection.js
import React from 'react';
import './MainSection.css';

function MainSection() {
  return (
    <section className="main-section">
      <div className="main-content">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png" alt="Chrome Logo" />
        <h1>The browser built to be yours</h1>
        <div className="button-row">
          <button className="rounded-button">Updates</button>
          <button className="rounded-button">Yours</button>
          <button className="rounded-button">Safe</button>
          <button className="rounded-button">Fast</button>
          <button className="rounded-button">By Google</button>
        </div>
        <p className="installer-text">
          Need the Chrome installer? <a href="/">Download here.</a>
        </p>
      </div>
    </section>
  );
}

export default MainSection;

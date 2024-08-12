// src/components/Features.js
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Key Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Speed</h3>
          <p>Chrome is designed to be fast in every possible way.</p>
        </div>
        <div className="feature-item">
          <h3>Security</h3>
          <p>Built-in security features keep you safe from malware and phishing.</p>
        </div>
        <div className="feature-item">
          <h3>Simplicity</h3>
          <p>Simple, clean interface to streamline your browsing experience.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;

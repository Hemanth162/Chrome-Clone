// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;




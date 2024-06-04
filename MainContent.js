import React from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <section id="home">
        <h2>Welcome to Sports4You</h2>
        <h4>Our Aim is to provide best quality sports items at reasonable price so that every child 
          can become a future superstar sportsperson and represent India. </h4>
      </section>
      <Gallery />
      <Contact />
    </main>
  );
}

export default MainContent;

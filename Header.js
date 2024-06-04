import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Sports4You</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

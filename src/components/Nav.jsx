import React from 'react';
import logo from '../assets/images/logo.svg';

const Nav = () => (
  <div className="custom-navbar">
    <img src={logo} alt="logo" className="logo" />

    <ul className="item-navigation">
      <a href="#about">About</a>
      <a href="#contact"> Contact</a>
    </ul>

  </div>
);

export default Nav;

import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <ul className="Nav">
      <li><img src="./assets/hero/logo.svg" alt="logo"/></li>
      <li><a href="default.asp">PRODUCT</a></li>
      <li><a href="news.asp">MONITORING</a></li>
      <li><a href="contact.asp">ABOUT</a></li>
      <li><a href="about.asp">CONTACT</a></li>
    </ul>
  );
}

export default Nav;

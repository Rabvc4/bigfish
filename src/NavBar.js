import React, { Component } from 'react';
import logo from './logo.svg';
import './NavBar.css';

class NavBar extends Component {
  render() {
      return (
        <ul className="Nav-item">
          <li className="Nav-logo"><img src={logo} className="Nav-logo App-logo" alt="logo" /></li>
          <li><a href="/home.html">Home</a></li>
          <li><a href="/index.html">Index</a></li>
          <li className="dropdown">
            <a href="#" className="dropbtn">Settings</a>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
        </ul>
      );
  }

}

export default NavBar;

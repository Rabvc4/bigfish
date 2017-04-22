import React, { Component } from 'react';
import logo from './logo.svg';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <ul>
          <li className="Nav-item"><img src={logo} className="Nav-logo App-logo" alt="logo" /></li>
          <li><a href="/home.html">Home</a></li>
          <li><a href="/index.html">Index</a></li>
          <li className="dropdown">
            <a href="javascript:void(0)" className="dropbtn">Dropdown</a>
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


import React from 'react';
import { Link } from 'react-router-dom';
import '../views/Navbar.css';
import brand from '../images/excursion-logo.png';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="brand">
      <img
        alt="brandName"
        className="brand"
        src={brand}
      />
    </Link>
    <Link to="/dashboard" className="list">
      <i className="fas fa-user-alt" />
        Dashboard
    </Link>
  </div>
);

export default Navbar;

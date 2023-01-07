import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
  <nav>
    <a href="/">
        <img src={logo} alt="logo" />
    </a>
    <div className="items">
        <Link to="/">Home</Link>
        <Link to="/schedule"> Schedule</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/media">Media</Link>
    </div>
    

  </nav>
  );
}

export default Navbar;

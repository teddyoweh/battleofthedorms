import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
  return (
  <nav>
    {/* <a href="/">
        <img src={logo} alt="logo" />
    </a> */}
    <div className="left">


    <div className="items">
        <Link to="/">Home</Link>
        <Link to="/schedule"> Schedule</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/media">Media</Link>
    </div>
    </div>
    <div className="right">
      <div className="reg-btn">


        <Link to="/register">Register</Link>
      </div>
    </div>

    

  </nav>
  );
}

export default Navbar;

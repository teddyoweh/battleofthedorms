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
        <Link to="/"> Schedule</Link>
        <Link to="/">Leaderboard</Link>
        <Link to="/">Media</Link>
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

import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
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
    <div className="mrp">
      <div onClick={()=>setIsOpen(!isOpen)} className="menu-btn">
      <i class='bx bx-menu'></i>
      </div>
      <div className={isOpen==false?"hide":"menu-box"}>

      <div className="items">
        <Link to="/">Home</Link>
        <Link to="/"> Schedule</Link>
        <Link to="/">Leaderboard</Link>
        <Link to="/">Media</Link>
    </div>
      </div>
    </div>

    

  </nav>
  );
}

export default Navbar;

import React from "react";
import { Navbar } from "../../components";
import banner from "../../assets/banner.jpeg";
import sgaimg from "../../assets/sga.jpeg";
import tcsimg from "../../assets/tcs.jpeg";
function HomePage() {
  return (
    <div>
        <Navbar />
        <div className="banner">
          <div className="img">
            <div className="top">
            <h1>
              Battle of the Paddles
            </h1>
            <p>
            Join the battle of the paddles and dominate your dorm's competition in this epic campus-wide ping pong tournament!
            </p>
            <div className="date">
              <b>Inter Dorm Registration Deadline: </b>
              <label htmlFor="">  24<sup>th</sup> January 2023.</label>
            </div>
  
            </div>
            <div className="bottom">
          <a href="" className="flex items-center">
            <span >Register</span> 
            <i class='bx bx-chevron-right ml-3 text-2xl	'></i>
          </a>
            </div>
          
          </div>
            {/* <img src={banner} alt="banner" /> */}
        </div>
        <div className="patners">
          <label>Patnered With: </label>
          <div className="partners-img">
            <img src={sgaimg} alt="sga" />
            <img src={tcsimg} alt="tcs" />
          </div>
        </div>
    </div>
  );
}

export default HomePage;
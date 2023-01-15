import React from "react";
import { Navbar } from "../../components";
import banner from "../../assets/banner.jpeg";
import sgaimg from "../../assets/sga.jpeg";
import tcsimg from "../../assets/tcs.jpeg";
import pingpong from "../../assets/pingpoing.jpeg";
import bball from "../../assets/bball.jpeg";
import swim from "../../assets/swim.jpeg";
import track from "../../assets/track.jpeg";
import soccer from "../../assets/soccer.jpeg";
function HomePage() {
  return (
    <div>
      
        <div className="banner">
          <div className="img">

          
          </div>
          <div className="content">
          <Navbar />
          <div className="top">
            <div className="h1">
              <span>Battle</span>
              <span>of the dorms</span>
            </div>
            <p>
            Join the battle of the paddles and dominate your dorm's competition in this epic campus-wide ping pong tournament!
            </p>
            {/* <div className="date">
              <b>Inter Dorm Registration Deadline: </b>
              <label htmlFor="">  24<sup>th</sup> January 2023.</label>
            </div> */}
  
            </div>
            
          </div>
          
        
        </div>
        <div className="sports-m">
          <label className="header" htmlFor="">
            Events
          </label>
        <div className="sports">
          <div className="sport">
            <div className="img">
              <img src={pingpong} ></img>
              </div>
            <div className="text">
              <label htmlFor="">Table Tennis</label>
            </div>
          </div>
          <div className="sport">
            <div className="img">
              <img src={bball} ></img>
              </div>
            <div className="text">
              <label htmlFor="">Basketball</label>
            </div>
          </div>
          <div className="sport">
            <div className="img">
              <img src={swim} ></img>
              </div>
            <div className="text">
              <label htmlFor="">Swimming</label>
            </div>
          </div>
          <div className="sport">
            <div className="img">
              <img src={track} ></img>
              </div>
            <div className="text">
              <label htmlFor="">Track</label>
            </div>
          </div>
          <div className="sport">
            <div className="img">
              <img src={soccer} ></img>
              </div>
            <div className="text">
              <label htmlFor="">Soccer</label>
            </div>
          </div>
        </div>
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
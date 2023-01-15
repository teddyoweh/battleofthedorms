import React,{useState} from "react";
import { Navbar } from "../../components";
import banner from "../../assets/tournaments.jpeg";
import pingpong from "../../assets/pingpong3.jpeg";
import bball from "../../assets/bball3.jpeg";
import swim from "../../assets/swim3.jpeg";
import track from "../../assets/track2.jpeg";
import soccer from "../../assets/soccer2.jpeg";
import { Link } from "react-router-dom";
function RegisterPage(){
    const [option,setOption] = useState(true);
    const [selectedinter,setSelectedinter] = useState(0);
    const dormslist = [
        'Honors',
        'Legends',
        'Legacy',
        'Integrity',
        'Centennial',
        'Traditions North',
        'Traditions South',
        'Texas Hall (Bosque)',
        'Texan Village',
        'Hunnewell & The Edge'
    
    ]

    return(
        <div className="schedule-mmm">
        
            <div className="header-img">
            <Navbar />
            <h1>Register</h1>
            {/* <img src={banner} alt="" /> */}
            </div>
            <div className="register-opens">
                <div className="register-box">
                    <div className="top">
                    <div className="left">
                        <img src={pingpong} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">
                            Table Tennis Tournament 
                        </div>
                        <small> Spring 2023 </small>
                        <div className="applybutton">
                            <Link to='./tabletennis'>
                     
                            <span>
                                Apply
                            </span>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="bottom">
                        <div className="date">
                        <i class='bx bx-time-five'></i>
                        <label htmlFor="">Deadline: </label>
                        </div>
                        <span>
                            24th January 2023.
                        </span>
                    </div>
                </div>
                <div className="register-box">
                    <div className="top">
                    <div className="left">
                        <img src={bball} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">
                            Basketball Tournament 
                        </div>
                        <small> Fall 2023 </small>
                        <div className="applybutton">
                            <Link>
                     
                            <span>
                                Not Open
                            </span>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="bottom">
                        <div className="date">
                        <i class='bx bx-time-five'></i>
                        <label htmlFor="">Deadline: </label>
                        </div>
                        <span>
                            To be announced.
                        </span>
                    </div>
                </div>
                <div className="register-box">
                    <div className="top">
                    <div className="left">
                        <img src={swim} alt="" />
                    </div>
                    <div className="right">
                        <div className="title">
                            Swimming Tournament 
                        </div>
                        <small> Fall 2023 </small>
                        <div className="applybutton">
                            <Link>
                     
                            <span>
                                Not Open
                            </span>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="bottom">
                        <div className="date">
                        <i class='bx bx-time-five'></i>
                        <label htmlFor="">Deadline: </label>
                        </div>
                        <span>
                            To be announced.
                        </span>
                    </div>
                </div>
            </div>
    
        </div>
    )
}

export default RegisterPage;
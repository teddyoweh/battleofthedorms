import React,{useState} from "react";
import { Navbar } from "../../components";
import { Routes, Route, useParams } from 'react-router-dom';

import banner from "../../assets/tournaments.jpeg";
import pingpong from "../../assets/pingpong3.jpeg";
import bball from "../../assets/bball2.jpeg";
import swim from "../../assets/swim2.jpeg";
import track from "../../assets/track2.jpeg";
import soccer from "../../assets/soccer2.jpeg";
import data from './data.json'
function IndvPage(){
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
        'Hunnewell',
        'The Edge',
        'Off Campus'
    
    ]
    let idata = null
    let { id } = useParams();
    const pathid = id
   
    for (let index = 0; index < data.length; index++) {
        if (data[index].id==pathid){
            idata = data[index]
        }
        
    }
    if( idata == null){
        window.location.href="/404"
    }
  
    return(
        <div className="schedule-mmm">
        
            <div className={"header-img "+pathid}>
            <Navbar />
            <h1>{idata.name}</h1>
            {/* <img src={banner} alt="" /> */}
            </div>
           <div className="register-form-box">
            <div className="header">
                <h1>
                    Fill out the form
                </h1>
            </div>
            <div className="register-form">
                <form action="">
                    <div className="frm-group">
                        <div className="frm-control">
                            <input type="text" className="rw" placeholder="First Name"/>
                        </div>
                        <div className="frm-control">
                            <input type="text" className="rw" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="frm-group">
                        <div className="frm-control">
                            <input type="text" className="rw" placeholder=" School Email"/>
                        </div>
                        <div className="frm-control">
                            <input type="text" className="rw" placeholder=" School ID"/>
                        </div>
                        
                    </div>
                    <div className="frm-group">
                        <div className="frm-control">
                            <input type="tel" placeholder="Phone Number (234 5678 910)"/>
                        </div>
                        
                    </div>

                    <div className="frm-group">
                        <div className="frm-control">
                            <select name="" id="">
                                <option disabled selected>
                                    Select Dorm
                                </option>
                                {
                                    dormslist.map((dorm,index)=>{
                                        return (
                                            <option value={dorm} key={index} >
                                                {dorm}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                     
                    </div>
                    <div className="frm-group">
                        <button>
                            Submit
                        </button>
                    </div>
                </form>
            </div>

           </div>
    
        </div>
    )
}

export default IndvPage;
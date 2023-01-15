import React,{useState} from "react";
import { Navbar } from "../../components";
import banner from "../../assets/tournaments.jpeg";
import pingpong from "../../assets/pingpong2.jpeg";
import bball from "../../assets/bball2.jpeg";
import swim from "../../assets/swim2.jpeg";
import track from "../../assets/track2.jpeg";
import soccer from "../../assets/soccer2.jpeg";
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
        <div className="schedule-sports">
            <div className="schedule-sport-a">

            
            <div className="schedule-sport active">
                <div className="schedule-img">
                    <img src={pingpong } ></img>
                </div>
            </div>
            <label htmlFor="">Ping Pong</label>
            </div>
            <div className="schedule-sport-a">

            
            <div className="schedule-sport">
                <div className="schedule-img">
                    <img src={bball } ></img>
                </div>
            </div>
            <label htmlFor="">Basketball</label>
            </div>
            <div className="schedule-sport-a">

            
            <div className="schedule-sport">
                <div className="schedule-img">
                    <img src={swim } ></img>
                </div>
            </div>
            <label htmlFor="">Swimming</label>
            </div>
            <div className="schedule-sport-a">

            
            <div className="schedule-sport">
                <div className="schedule-img">
                    <img src={track} ></img>
                </div>
            </div>
            <label htmlFor="">Track</label>
            </div>
            <div className="schedule-sport-a">

            
<div className="schedule-sport">
    <div className="schedule-img">
        <img src={soccer} ></img>
    </div>
</div>
<label htmlFor="">Soccer</label>
</div>
        </div>
        <div className="schedule-m">
    
            <div className="schedule-page">
                <div className="schedule-top">
                    <div className="schedule-header">
                      
                    </div>
                    <div className="schedule-options">
                        <span onClick={()=>setOption(!option)} className={option && "active"}>All</span>
                        <span onClick={()=>setOption(!option)}  className={!option && "active"}>Inter Dorm</span>
                    </div>
                    {
                        !option &&
               
                    <div className="inter-options ">
                        {
                            dormslist.map((dorm,index)=>{
                                return(
                                    <span onClick={()=>setSelectedinter(index)} key={index} className={selectedinter==index&&'active'}>
                                        {dorm}
                                    </span>
                                )
                            })
                        }

                    </div>
                         }
                    <div className="leaderboard-table">
                    <table className="border-collapse w-full text-center">
  <thead className="bg-gray-800 text-white">
    <tr>
      <th className="p-3 font-black ">Rank</th>
      <th className="p-3 font-bold ">Name</th>
      <th className="p-3 font-bold ">Dorm</th>
      <th className="p-3 font-bold ">Wins</th>
      <th className="p-3 font-bold ">Losses</th>
        <th className="p-3 font-bold ">Total Played</th>
      <th className="p-3 font-bold ">Points </th>
      <th className="p-3 font-bold ">View Games</th>


    </tr>
  </thead>
  <tbody>
    <tr className= "">
      <td className="p-3 purple">1</td>
      <td className="p-3">John Doe</td>
        <td className="p-3">Honors</td>
      <td className="p-3">10</td>
      <td className="p-3">0</td>
        <td className="p-3">10</td>
        <td className="p-3">0</td>
        <td className="p-3 purple-text pointer"><i class='bx bx-link-external'></i></td>
 
    </tr>
    
  </tbody>
</table>


                    </div>
                    <div className="schedule-footer">

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RegisterPage;
"use client"
import { useState } from "react";
import NavComponent from "../components/Nav";
import { Location, Ticket } from "iconsax-react";
import "../styles/schedule.scss"
import "../styles/table.scss"
import eventdata from '../data/events.json'
export default function LeaderboardPage(){
    const sports = [
        { name: 'All', icon: 'bx bxs-dashboard' },
        {name:'Events',icon:<Ticket size="20" color="#FF775F"/>,iconw:<Ticket size="20" color="white"/>,
        ic:true},
        { name: 'Basketball', icon: 'bx bx-basketball' },
        { name: 'Track', icon: 'bx bx-run' },
        { name: 'Swimming', icon: 'bx bx-swim' },
        { name: 'Table Tennis', icon: 'bx bx-tennis-ball' },
        
      ];

      
      
    const [activesport,setActiveSport] = useState(sports[0].name)
    return (
        <div className="schedule">
            <NavComponent/>
            <div className="schedule-content">
                <div className="schedule-head">

         
            <div className="years">
                    <div className="year active">
                        <label htmlFor="">
                         2023
                        </label>
                    </div>
                    <div className="year">
                        <label htmlFor="">
                         2024
                        </label>
                    </div>
                </div>
                <div className="schedule-sports">
                        {
                            sports.map((sport,index)=>{
                                return (
                                    <div className={activesport==sport.name?"sport active":"sport"} onClick={()=>setActiveSport(sport.name)}>
                                        {
                                            sport.ic!==undefined?<i>
                                                
                                                {activesport==sport.name?sport.iconw:sport.icon}</i>:
                               <i className={sport.icon}>
                                             </i>     }
                                        <label htmlFor="">
                                        {sport.name}
                                        </label>
                                    

                                
                              
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                    </div>
                    </div>)}
"use client"
import { useState } from "react";
import NavComponent from "../components/Nav";

import "../styles/schedule.scss"
export default function SchedulePage(){
    
    const sports =[
        'Basketball',
        'Track',
        'Swimming',
        'Table Tennis',

    ]
    const [activesport,setActiveSport] = useState(sports[0])
    return (
        <div className="schedule">
            <NavComponent/>
            <div className="schedule-content">
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

                <div className="schedule-box">
                    <div className="schedule-sports">
                        {
                            sports.map((sport,index)=>{
                                return (
                                    <div className={activesport==sport?"sport active":"sport"} onClick={()=>setActiveSport(sport)}>
                                        {sport}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}
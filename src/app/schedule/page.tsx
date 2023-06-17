"use client"
import { useState } from "react";
import NavComponent from "../components/Nav";
import { Location, Ticket } from "iconsax-react";
import "../styles/schedule.scss"
import "../styles/table.scss"
import eventdata from '../data/events.json'

  // Replace 'your-icon-library' with the actual library you're using for icons

function RenderEventType({ type, name }:any) {
  const sports = [
    { name: 'All', icon: 'bx bxs-dashboard' },
    { name: 'Events', icon: <Ticket size="14" color="#a5a5a5" />, iconw: <Ticket size="20" color="white" />, ic: true },
    { name: 'Basketball', icon: 'bx bx-basketball' },
    { name: 'Track', icon: 'bx bx-run' },
    { name: 'Swimming', icon: 'bx bx-swim' },
    { name: 'Table Tennis', icon: 'bx bx-tennis-ball' },
  ];

  const getIcon = (icon:any, isActive:any) => {
    if (isActive) {
      return <i>{icon}</i>;
    } else {
      return <i className={icon}></i>;
    }
  };

  const getActiveSport = () => {
    switch (type) {
      case 'All':
        return sports[0];
      case 'Events':
        return sports[1];
      case 'Basketball':
        return sports[2];
      case 'Track':
        return sports[3];
      case 'Swimming':
        return sports[4];
      case 'Table Tennis':
        return sports[5];
      default:
        return sports[0];
    }
  };

  const activeSport = getActiveSport();

  return (
    <div className="ev">
      <a className="enty">
        <b>
        {activeSport.ic !== undefined ? (
          <i>{activeSport.name === name ? activeSport.iconw : activeSport.icon}</i>
        ) : (
          getIcon(activeSport.icon, activeSport.name === name)
        )}
        </b>
        <span>{name}</span>
       
      </a>
    </div>
  );
}

 
function RenderLocation({location}:any){
    return (
        <div className="loc">
            <a className="location">
                <b>
                <Location size={16} color="#888" />
                </b>
                <span>
               {location}

                </span>
            </a>
        </div>
    )
}
function RenderSchedule({sporttype}){
    function getShortDayOfWeek(month:any, day:any, year:any) {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const monthIndex = months.findIndex(m => m.toLowerCase() === month.toLowerCase());
        const date = new Date(year, monthIndex, day);
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayOfWeekIndex = date.getDay();
      
        return daysOfWeek[dayOfWeekIndex];
      }
      
      const batchA = [
        'Honors',
        'TNORTH',
        'Integ',
        'Legends',
        'Legacy',
        'Centennial'
      ];
      
      const batchB = [
    
        'Heritage',
        'Texan Village',
        'TSOUTH',
        'Texan Hall',
  
        'Hunnewell & The Edge',
        'Off Campus'
      ];
      
    return (
        <div className="render-schedule">
            {eventdata.map((event,index)=>{
                const day = getShortDayOfWeek(event.month,event.day,event.year)
                const display = sporttype=='All'?true: sporttype.toLowerCase()==event.type.toLowerCase()
                const batch = event.batch =='A'?batchA:batchB
                return (
                  <>
                  { display && 
              
                    <div className="event">
                    <div className="date">
                        <small>{day+", "+event.short_month}</small>
                        <label htmlFor="">
                        {event.day}
                        </label>
                       <span>{event.time} </span>
                    </div>
                    <div className="info">
        
            {
                event.sec=="event"?
                <div className="cer">
                    <RenderEventType type={event.type }name={event.name}/>
                        <label htmlFor="">{event.name} </label>
                    <RenderLocation location={event.location}/>
                    </div>
                :
             
                <div className="comp">
                <RenderEventType  type={event.type} name={event.name}/>
                {event.sec=="sport"?
                <div className="vs">
                <label htmlFor="">{event.team1}</label>
                <div className="vs-text">VS</div>
                <label htmlFor="">{event.team2}</label>
            </div>
                :
                <div className="batches">
{
  batch.map((b,index)=>{
  
    return (
      <div className="batch">
        <span>
          {index+1}
        </span>
      <label className="" htmlFor="">{b} </label>

      </div>


    )
  })
}
                </div>
              
                }
                <RenderLocation location={event.location}/>
        
                          </div>
              }
        
    
                   
                    </div>
                </div>
                }
                </>
                )
            })}
          

        </div>
    )
}
export default function SchedulePage(){
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
                <div className="schedule-box">
                
                    <RenderSchedule sporttype={activesport}/>
                </div>
                
            </div>
        </div>
    )
}
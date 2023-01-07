import React,{useState} from "react";
import { Navbar } from "../../components";
function SchedulePage(){
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
        'Hunnewell & The Edge',
        'Off Campus'
    
    ]

    return(
        <div>
            <Navbar />
            <div className="schedule-page">
                <div className="schedule-top">
                    <div className="schedule-header">
                        <h1>Tournament Schedule</h1>
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
                    <div className="schedule-content">
                    <div class="bracket">
  <div class="round round-1">
    <div class="match match-1">
      <div class="team team-1 winner"><div className="score">21</div><label htmlFor="">Honors</label> </div>
      <div class="team team-2"><div className="score">8</div><label htmlFor="">Legends</label> </div>
    </div>
    <div class="match match-2">
      <div class="team team-1 winner"><div className="score">21 </div><label htmlFor="">Legacy</label> </div>
      <div class="team team-2"><div className="score">15 </div><label htmlFor="">Integrity</label> </div>
    </div>
    <div class="match match-3">
      <div class="team team-1"><div className="score">10</div><label htmlFor="">Centennial</label> </div>
      <div class="team team-2 winner"><div className="score">21</div><label htmlFor="">Traditions North</label> </div>
    </div>
    <div class="match match-4">
    <div class="team team-2 winner"><div className="score">- </div><label htmlFor="">Traditions South</label> </div>
      <div class="team team-2"><div className="score">- </div><label htmlFor="">Texas Hall (Bosque)</label> </div>
    </div>
    <div class="match match-5">
    <div class="team team-2 winner"><div className="score">- </div><label htmlFor="">Hunnewell & The Edge</label> </div>
      <div class="team team-2"><div className="score">- </div><label htmlFor="">Texas Village</label> </div>
    </div>

  </div>
  <div class="round round-2">
    <div class="match match-1">
      <div class="team team-1"></div>
      <div class="team team-2"></div>
    </div>
    <div class="match match-2">
      <div class="team team-1"></div>
      <div class="team team-2"></div>
    </div>
  </div>
  <div class="round round-3">
    <div class="match match-1">
      <div class="team team-1"></div>
      <div class="team team-2"></div>
    </div>
  </div>
  <div class="round round-4">
    <div class="match match-1">
      <div class="team team-1"></div>
      <div class="team team-2"></div>
    </div>
  </div>
</div>

                    </div>
                    <div className="schedule-footer">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchedulePage;
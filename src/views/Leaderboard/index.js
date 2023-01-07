import React,{useState} from "react";
import { Navbar } from "../../components";
function LeaderboardPage(){
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
        <div>
            <Navbar />
            <div className="schedule-page">
                <div className="schedule-top">
                    <div className="schedule-header">
                        <h1>Tournament Leaderboard</h1>
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
    )
}

export default LeaderboardPage;
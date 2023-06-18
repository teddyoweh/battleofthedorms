import NavComponent from "../components/Nav";
import '../styles/auth.scss'
import basketball from '../assets/basketball-auth.jpeg'
import swimming from '../assets/swimming auth.jpeg'
import track from '../assets/track auth.jpeg'
import Link from "next/link";
export default function RegisterPage(){
    const data = [
        {
            name:'Basketball (Fall 2023)',
            link:'register/basketball',
            img:basketball.src
        },
        {
            name:'Swimming (Fall 2023)',
            link:'register/swimming',
            img:swimming.src
        },
        {
            name:'Track (Fall 2023)',
            link:'register/track',
            img:track.src
        }
    ]
    return (
        <>
        <div className="auth">
            <NavComponent reg={true}/>
            <div className="sport-auth">
                <div className="header">

                </div>
                <div className="content">
                    {
                        data.map((sport,index)=>{
                            return (
                                <div className="sport">
                                <img src={sport.img} alt=""/>
                                <div className="info">
                                    <label htmlFor="">
                                       {sport.name}
                                    </label>
                                    <Link
                                    href={sport.link}
                                    >
                                    Register
                                    </Link>
                                </div>
                            </div>
                            )
                        })
                    }
                 
                </div>
            </div>
        </div>
        </>
    )
}
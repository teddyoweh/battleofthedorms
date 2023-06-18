"use client"
import '../styles/nav.scss'
import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function NavComponent({reg}:any){
    const pathname = usePathname()

    return (
        <>
            <div className="nav-container">
                <Link href="./"> 
   
                <div className='logo'>
                    <Image src={logo} alt='Battle of the Dorms Logo'/>
                </div>
                </Link>
                
                <div className='nav-items'>
                    <div className={pathname =='/'?"nav-item active":"nav-item"}>
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    <div className={pathname =='/schedule'?"nav-item active":"nav-item"}>
                        <Link href="schedule">
                            Schedule
                        </Link>
                    </div>
                    <div className={pathname =='/leaderboard'?"nav-item active":"nav-item"}>
                        <Link href="leaderboard">
                            Leaderboard
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="awards">
                            Awards
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link href="media">
                            Media
                        </Link>
                    </div>



                </div>
                <div></div>
                 
            </div>
        </>
    )
}
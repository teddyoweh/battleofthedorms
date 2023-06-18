"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import NavComponent from './components/Nav'
import './styles/landing.scss'
import Link from 'next/link'
import Floaters from './components/Floaters'
import { useScroll, animated } from '@react-spring/web'
import { useState } from 'react'
import bballimg from './assets/bball1.jpeg'
import swimmimg from './assets/swimm.jpeg'
import pingpongimg from './assets/pingpong.jpeg'
import trackimg from './assets/track.jpeg'
import sgalogo from './assets/sga.png'
import farmhouselogo from './assets/farmhouse.png'
import tcslogo from './assets/tcs.png'
import tsuaaiaa from './assets/tsuaiaa.png'
import tsupingpong from './assets/tsupingpong.png'
import scheduleimg from './assets/sch.jpeg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { scrollYProgress } = useScroll()

  const sports = [
    {
      name:'Basketball',
      image:bballimg,
      desc:"Dribble, Shoot, Score! Get Your Game On and Experience the Thrills of Fast-paced Hoops Action. Show off your skills, make jaw-dropping plays, and lead your team to victory in electrifying basketball showdowns. Are you ready to leave it all on the court and etch your name in dormitory sports history"
    },
    {
      name:'Swimming',
      image:swimmimg,
      desc:"Dive into the Pool and Make Waves! Immerse yourself in the Aquatic Showdown as you compete in exhilarating swimming events. Whether you're a seasoned swimmer or a first-time racer, the water awaits your strokes."
    },
    {
      name:'Track',
      image:trackimg,
      desc:"Sprint, Jump, and Set New Records on the Track. Lace up your running shoes and prepare to ignite your speed and agility on the track. Feel the thrill as you dash through the finish line"

    },
    {
      name:'Table Tennis',
      image:pingpongimg,
      desc:"Grab Your Paddle and Test Your Skills in Fast-paced Ping Pong Battles. It's time to show off your finesse and precision in intense table tennis matches. Engage in lightning-fast rallies, strategize your shots, and outmaneuver your opponents."
    }
  ]
  const dorms = [
    "Honors Hall",
    "Traditions North Hall",
    "Traditions South Hall",
    "Legends Hall",
    "Legacy Hall",
    "Centennial Hall",
    "Integrity Hall",
    "Heritage Hall",
    "Texan Village",
    "Texan Hall",
    "Hunnewell & The Edge",
    "Off Campus"
  ];
  
  const patners = [
    {
      name:'Student Government Association',
      image:sgalogo

    },{
      name:'Farmhouse Fraternity',
      image:farmhouselogo
    },
    {
      name:'Tarleton Computer Society'
      ,image:tcslogo,
      class:'scale2'
    },
 
    {
      name:'Tarleton Ping Pong Club',
      image:tsupingpong
    },
       {
      name:'Tarleton American Institute of Aeronautics and Astronautics',
      image:tsuaaiaa
    },
  ]
  return (
  <>


  <div className='landing'>
  <NavComponent/>
  <Floaters/>
    <div className="hero">
    <div className='small-text'>
      <label htmlFor="">
      Get ready to rumble, and have fun in this 3 week long event.
      </label>

    </div>
    <div className="hero-text">
      <label htmlFor="">
        Battle of the <span> Dorms</span>
      </label>
    </div>
    <div className="hero-subtext">
      <p>
      Join the battle of the dorms and dominate your dorm's competition in this epic campus-wide sports tournament!


      </p>
    </div>
    <div className="hero-btns">
    <Link href='attend'>
       Attend Event
      </Link>
      <Link href='register'>
        Be the face of your dorm - Sign Up
      </Link>

    </div>
    </div>
    <div className="content" style={{
     
    }}>
    <div className="dorms">
      <div className="dorms-head">
        <label htmlFor="">
          Dorms
        </label>
      </div>
      <div className="dorms-body">
    {
      dorms.map((dorm,index)=>{
        return (
          <div className="dorm">
            <label htmlFor="">
              {dorm}
            </label>
          </div>
        )
      })
    }
      </div>
    </div>
      <div className='sports-body'>
        <div className="sports-head">
        <label>
          Sports

      </label>
      <span>
      Experience the Thrills and Challenges of Various Sports at Tarleton State University.
      </span>
        </div>
     
      <div className="sports">
      

  
        {
          sports.map((sport,index)=>{
            const altname = `Battle of the dorms ${sport.name} logo`
            return (
              
              <div className="sport">

                <Image src={sport.image.src} width={400} height={220} alt={altname}/>
                <div className="sport-name">
                  <label htmlFor="">
                    {
                      sport.name
                    }
                  </label>
                  </div>
                  <div className="sport-desc">
                    <p>
                      {
                        sport.desc
                      }
                    </p>
                  </div>
                  <div className="sport-link">

                    <Link title='View Schedule' href={""}>
                      View Schedule
                      </Link>
                      <i className='bx bx-chevron-right'/>
                  </div>
              </div>
            )
          })
        }
       
      </div>
      </div>
   
      <div className="schedule">
          <div className="schedule-content">
          <div className="schedule-head">
            <label htmlFor="">
              Schedule
            </label>
            <p>
            Stay in the Game: Check Out the Battle of the Dorms Event Calendar and Plan Your Ultimate Sports Experience.
            </p>
            <p>
            Whether you're a participant, a passionate supporter, or simply looking for an adrenaline-filled experience, our comprehensive schedule has something for everyone. From basketball showdowns to swimming races, track sprints to table tennis battles, this is your chance to witness the talent, determination, and camaraderie of Tarleton State University's finest athletes. Mark your calendars and join us as we celebrate the spirit of sportsmanship and community!
            </p>
    
           
          </div>
          <div className="schedule-btn">

   
<Link href={""}>
  View Schedule
</Link>
</div>
          </div>
          <div className="schedule-img">
            <Image src={scheduleimg.src} alt='Battle of the dorms Schedule Image' width={300} height={300}/>
        </div>
        </div>
        <div className="patners">
        <div className="patners-header">
            <label htmlFor="
            ">
              Partners
            </label>
        </div>
        <div className="patners-list">
          {
            
            patners.map((patner,index)=>{
              const altname = `Battle of the dorm${patner.name} Logo`
              return (
                <div className="patner">
                  <div className="patner-img">
                  <Image src={patner.image} alt={altname}
                  width={100}
                  height={100}
                  className={patner.class =='scale2'?'scale2':''}
                  />
                  </div>
                  <div className="patner-name">
                    <label htmlFor="">
                      {patner.name}
                    </label>
                  </div>
                 
                </div>
              )
            })
          }
        </div>
      </div>
    
      </div>
   

  </div>
  </>
  )
}

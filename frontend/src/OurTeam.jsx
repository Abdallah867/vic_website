import React, { useState, useEffect } from "react";
import './OurTeam.css'
import TeamSection from './TeamSection'
import WA from './assets/WA.jpg';
import DB from './assets/DB.png';
import SC from './assets/SC.jpg';
import IT from './assets/IT.jpg';
import IG from './assets/IG.jpg';
import AK from './assets/AK.png';
import AA from './assets/AA.jpg';
import KA from './assets/KA.jpg';
import SP from './assets/SP.jpeg';
import AR from './assets/AR.jpg';
import IN from './assets/IN.png';
function OurTeam() {
  return (
    <>
    <div className='mainPage'> 
      <h1 className='ourTeam'>Our Team</h1>
      <br /><br />
      <div className='teamMembers'>
        <div  className='section1'> 
            <TeamSection name="Houssem " Fname='BOUSLIMANE' job="PRESIDENT" Photo={IG}/>
            <TeamSection name="Ibtihal " Fname='TEMMAR' job="VICE PRESIDENT"Photo={IT} />
            <TeamSection name="Zoubida " Fname='BELHAMISSI' job="ACTIVITIES RESPO" Photo={AR}/>
        </div>    
        <div className="section2">
          <TeamSection name="Khaled " Fname='FEROUKHI' job="IT HOD" Photo={AA}/> 
          <TeamSection name="Yasser " Fname='BENZINE' job="FLER HOD" Photo={SC}/> 
          <TeamSection name="Ines " Fname='MAACHE' job="HR HOD" Photo={WA}  />
          <TeamSection name="Amira " Fname='TALBE' job="COMM HOD"Photo={DB} /> 
        </div>
        <div className="section3"> 
             
          <TeamSection name="Aimen"Fname='ZAMOUCHI' job="SPARK HOD"Photo={SP} />
          <TeamSection name="Amina" Fname='NOUI' job="EB HOD" Photo={AK}/>
          <TeamSection name="Abderahman"Fname='AMMALI' job="TRAINING HOD"Photo={KA} />
          <TeamSection name="Hadjer "Fname='MOKEDDEM' job="ENTERTAINMENT HOD"Photo={IN} />
        </div>


        



      </div>
    </div>
     


    </>
  )
}

export default OurTeam
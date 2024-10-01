import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import logoCouleur from "./assets/logo_couleur.png"
import logoMaarifa from "./assets/logo_maarifa.png"
const About = () => {
  return (

    <div>
        <h1>About Us!</h1>
        <div id="about">
            <div id="vic">
                <img id="logo_dis_vic" src={logoCouleur}  alt="logo vic"/>
                <p id="vic_dis"> The VISION & INNOVATION Club was created in 
                2014 by a dedicated group of students within the National 
                Polytechnic School of Algiers. Since then, the club 
                has been known for its unique vision to help stu- 
                dents strengthen their breadths and complete 
                their education process by organizing various 
                activities in many fields, from sessions and 
                debates to conferences and international events.</p>
            </div>
            <div id="maarifa">
                <img id="logo_dis_maarifa" src={logoMaarifa}  alt="logo maarifa"/>
                <p id="maarifa_dis">The Algerian Student Scientific and Cultural Association,
                    accredited by the Ministry of the Interior, works to enhance student 
                    knowledge and culture. It organizes activities like workshops, discussions,
                    and events, aiming to connect students with society, develop talents, 
                    and promote environmental awareness, while fostering a strong link between 
                    the university and economic institutions.</p>
            </div>
        </div>
    </div>
  );
};

export default About;

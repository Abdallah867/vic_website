import React from "react";
import { Link } from "react-router-dom";
import "./Dep.css";
import commaup from "./assets/asset1.png"
import commadown from "./assets/asset2.png"
import spark from "./assets/SPARK-01.png"
import EB from "./assets/EnglishBubble-01.png"
import training from "./assets/VICTraining-03.png"
import enter from "./assets/Entertainement-02.png"

const Dep = () => {
  return (

    <div>
        <div className="mission">
                <h1 className="rv-text">Mission & Vision</h1>
                <div className="vm">
                    <div className="vision">
                        <h1 id="title">MISSION</h1>
                        <p className="vis">Our mission and main goal
                        is to help students develop
                        their soft and hard skills, 
                        as well as build their network
                        through multiple enjoyable
                        events and activities.</p><hr/><h2>01</h2>
                    </div>
                    <div className="vision">
                        <h1 id="title">VISION</h1>
                        <p className="vis">Providing the world and
                        our society with future
                        leaders who are capableof making a positive
                        impact.</p><br/><br /><br /><hr/><h2>02</h2>
                    </div>
                </div>
                <div className="vm">
                    <img className="cama" src={commadown} alt=""/>
                    <h1 className="we">WE LEAD THE VICTORY</h1>
                    <img className="cama" src={commaup} alt=""/>
                </div>

            </div>
            <div className="depart">
                <h1 className="reveal-text">Main Departments</h1>
                <div className="main">
                    <div className="one">
                        <h1 className="IT">IT</h1>
                        <p className="text1">INFORMATION TECHNOLOGY (IT): it is responsiple for everything that involves graphics: social media designs, posters, videos and website.
                        </p>
                    </div>
                    <div className="one">
                        <h1 className="comm">COMM</h1>
                        <p className="text7">COMMUNICATION (COMM): its main mission is to create content that reflects the image of our club and communicate our events and our activities on different social media platforms.
                        </p>
                    </div>
                    <div className="one">
                        <h1 className="rh">HR</h1>
                        <p className="text3">HUMAN RESOURCES (RH): it is in charge of the internal organization and communication, administrative work, recruiting and motivating members.
                        </p>
                    </div>
                    <div className="one">
                        <h1 className="fler">FLER</h1>
                        <p className="text4">FINANCE, LOGISTICS & EXTERNAL RELATIONS (FLER): it is in charge of the club's finances, finding sponsors for our different events, and manging the club's external relations.
                        </p>
                    </div>
                </div>
                <h1 className="reveal-text">Activity Departments</h1>
                <div className="sub">
                    <div className="one">
                        <h1 className="spark">SPARK</h1>
                        <div className="test">
                            <p className="text5">Its main objective is to keep the students informed of all the scientific competitions available and to provide them with all the financial assistance and equipement they need in order to work on a list of compatitions.</p>
                            <img className="sp" src={spark} alt=""/>
                        </div>
                    </div>
                    <div className="one">
                        <h1 className="comm">EB</h1>
                        <div className="test1">
                            <p className="text2">ENGLISH BUBBLE (EB): The main goal of this department is to create a safe learning environment for students to develop their general English skills through different sessions and interactive activities.</p>
                            <img className="eb" src={EB} alt=""/>
                        </div>
                    </div>
                    <div className="one">
                        <h1 className="train">Training</h1>
                        <div className="test2">
                            <p className="text6">The department is committed to the improvement of the professional image of students by organizing numerous training courses in different fields.</p>
                            <img className="tr" src={training} alt=""/>
                        </div>
                    </div>
                    <div className="one">
                        <h1 className="enter">Entertaimnent</h1>
                        <div className="test2">
                            <p className="text8">An HR sub group that ensures community buildning inside the club, by providing entertaining and interactive activities </p>
                            <img className="en" src={enter} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
    </div>
  );
};

export default Dep;

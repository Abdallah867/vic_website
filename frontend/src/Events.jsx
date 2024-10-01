import { Form, useNavigate } from "react-router-dom";
import EventDetails from "./EventDetails";
import "./events.css"
import polyround from "./assets/poly-round.png"
import igniteround from "./assets/ignite-round.png"
import mastereround from "./assets/Master-round.png"
import hourround from "./assets/HourCode-round.png"
import gameround from "./assets/Game-round.png"
import charityround from "./assets/charity-round(1).png"
import angloround from "./assets/anglo-round.png"
import logo09 from "./assets/logo-09.png"
import galaround from "./assets/Gala-round.png"
import cpspround from "./assets/CPSP-round.png"
import ingenround from "./assets/ingen-rond.png"
import spellinground from "./assets/spellBee-round.png"

const Events = () => {
    const navigate = useNavigate();

    const events = [
        {
            "name": "Ignite:",
            "description": "",
            "date": "",
            "image": igniteround
        }, 
        {
            "name": "MasterClass:",
            "description": "",
            "date": "",
            "image": mastereround
        }, 
        {
            "name": "HourOfCode:",
            "description": "",
            "date": "",
            "image": hourround
        }, 
        {
            "name": "Gamecraft:",
            "description": "",
            "date": "",
            "image": gameround
        }, 
        {
            "name": "polymaze:",
            "description": "",
            "date": "",
            "image": polyround
        }, 
        {
            "name": "charity:",
            "description": "",
            "date": "",
            "image": charityround
        }, 
        {
            "name": "Anglosphere:",
            "description": "",
            "date": "",
            "image": angloround
        }, 
        {
            "name": "Techitup:",
            "description": "",
            "date": "",
            "image": logo09
        }, 
        {
            "name": "Engineer Gala:",
            "description": "",
            "date": "",
            "image": galaround
        }, 
        {
            "name": "CPSP:",
            "description": "",
            "date": "",
            "image": cpspround
        }, 
        {
            "name": "Ingenium:",
            "description": "",
            "date": "",
            "image": ingenround
        }, 
        {
            "name": "Spelling Bee:",
            "description": "",
            "date": "",
            "image": spellinground
        }, 

    ];

    return (
        <div className="DIVLKBIR">
            <h1 id="Events" >  Our Events :</h1>
            <div className="all-events">
                {events.map((event, index) => (
                    console.log(event),
                    <div onClick={()=>{
                        navigate(`/events/${event.name}`);
                    }} key={index} className="one-event">
                        <h2 className="titleevent">{event.name}</h2>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <img id="image1"   src={event.image} alt={event.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;

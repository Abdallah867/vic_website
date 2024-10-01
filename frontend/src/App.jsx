import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";  // Import de la page Home
import About from "./About"; // Import de la page About
import Nav from "./nav"; // Import de la barre de navigation (Nav)
import Dep from "./dep";
import OurTeam from "./OurTeam"
import Events from "./Events";
import EventDetails from './EventDetails'; 

function App() {
  return (
    <div>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home/>} />  {/* Route vers la page Home */}
        <Route path="/about" element={<About/>} /> {/* Route vers la page About */}
        <Route path="/departments" element={<Dep/>}/>
        <Route path="/team" element={<OurTeam/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/:nameevent" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;

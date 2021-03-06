import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";

function ColorDetail(){
  let {color} = useParams();
  let styleBg = {
    backgroundColor:color,
    height: "100vh",
    width: "100vw"
    
  }

  return (
    <div style={styleBg}>
      <h1>Welcome to the world of {color}</h1>
      <h2> Isn't {color} AWESOME? </h2>
      
      <h3><Link to="/colors">Go Back!</Link></h3>
    </div>
  )
}

export default ColorDetail
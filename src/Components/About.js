import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function About() {
const location=useLocation();
const {username}=location?.state||"user not found";
const Navigate=useNavigate();


function handleClick(){ 
  Navigate('/cmpOne',{state:{username:username}})
}


  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <p>Hello {username||"user not found"}</p>
      <button className='btn btn-primary' onClick={handleClick}>click</button>
    </div>
  );
}

export default About;

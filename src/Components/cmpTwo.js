import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


 function CmpTwo() {

     const location = useLocation();
     const {username}=location?.state||"user not found";
     const Navigate = useNavigate();

    function handleClick(){ 
        Navigate('/cmpthree',{state:{username:username}})
      }
      
  return (
    <div>
      <h1>Component Two</h1>
      <h1>Hello {username||"user not found"}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default CmpTwo;

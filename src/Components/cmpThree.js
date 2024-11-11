import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CmpThree() {

    const location= useLocation();
    const Navigate=useNavigate();
    const {username}=location?.state||"user not found";

  return (
    <div>
      <h1>Component Three</h1>
      <h1>hello {username||"user not found"}</h1>
      <button className='btn btn-primary'>Back</button>
    </div>
  )
}

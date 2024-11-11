import React from 'react'
import "../Components/Navbar.css"
import { Navigate, useNavigate } from 'react-router-dom';

 function Navbar() {
    const isLogin=localStorage.getItem("isLogin")
    const Navigate=useNavigate();
    
    function handleLogout(){
         localStorage.setItem('isLogin',false);
         Navigate('/login');         
    }

  return (
    <header className="header">
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item"><a href={"/about"}>About</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
        <li className="nav-item"><a href="/details">Details</a></li>
        <li className="nav-item"><a href="/services">Services</a></li>
        <li className="nav-item"><a href="/form">Form</a></li>
        <li className='nav-item'><button className='btn btn-primary' onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>

  </header>
  )
}

export default Navbar;
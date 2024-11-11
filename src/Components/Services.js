import { useNavigate } from 'react-router-dom';
import App from '../App.css';
import React, { useEffect, useState } from 'react';

function Services() {
  const [isSlideIn, setIsSlideIn] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
const Navigate=useNavigate();

  useEffect(() => {
    // Trigger the interactive message shortly after the slide-in animation starts
    setTimeout(() => {
      setShowMessage(true);
      Navigate('/soon')
    }, 3000); // Adjust the timing as needed

    const nav= () => {
      setIsSlideIn(false); // Trigger slide-out animation on unmount
    };
  }, []);

  return (
    <div className={isSlideIn ? 'slide-in' : 'slide-out'}>
     <h1>Services Page</h1>
      
      {showMessage && (
        <div className="blank">
         <h1>Coming Soon</h1>
        </div>
      )}
    </div>
  );
}

export default Services;

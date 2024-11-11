import React from 'react';
// import img from '../img.png';
import img from '../coming-femoungg.webp';
import './ComingSoon.css'; // Create this CSS file for styling

export default function ComingSoon() {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={img} alt="Coming Soon" />
      </div>
    </div>
  );
}

import React from 'react';
import './Advantage.css';

function Advantage() {
  return (
    <div className="Advantage">
      <div className="Advantage-background">
        <h2 className="Advantage-text">
          Why choose Advantage?
        </h2>
        <div className="Advantage-response-container">
          <div className="Advantage-image-text">
            <div>
              <h2>We offer turnkey solutions for consultants, drilling contractors and end users</h2>
            </div>
            <img src="/assets/advantage/img-1.png" alt="1"/>
          </div>
          <div className="Advantage-image-text">
            <div>
              <h2>We're the exclusive Canadian distributor</h2>
            </div>
            <img src="/assets/advantage/img-2.png" alt="2"/>
          </div>
          <div className="Advantage-image-text">
            <div>
              <h2>We provide</h2>
            </div>
            <img src="/assets/advantage/img-3.png" alt="3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;

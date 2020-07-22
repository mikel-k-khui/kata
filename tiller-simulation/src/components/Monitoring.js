import React from 'react';
import './Monitoring.css';

function Monitoring() {
  return (
    <div className="Monitoring">
      <div className="Monitoring-background">
        <header className="Monitoring-wrapper">
          <h2 className="Monitoring-text">
            Our remote monitoring service eliminates huge amounts of manual work and helps make sure everyone gets home safe.
          </h2>
          <h4 className="Monitoring-text">
            Smart sensoring helps you capture data faster and work with it more easily. And it helps keep workers safer in the field.
          </h4>
          <div className="Monitoring-response-container">
            <img src="/assets/monitoring/safety.png" className="Monitoring-response-boxes" alt="safety"/>
            <img src="/assets/monitoring/speed.png" className="Monitoring-response-boxes" alt="speed"/>
            <img src="/assets/monitoring/savings.png" className="Monitoring-response-boxes" alt="savings"/>
          </div>
      </header>
      </div>
    </div>
  );
}

export default Monitoring;

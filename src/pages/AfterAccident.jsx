import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/afterAccident.css';

function AfterAccident() {
  return (
    <div className="after-accident-page">
      <div className="container">
        <h1>Steps to Take After a Road Accident</h1>
        <p>In the event of an accident, it's crucial to remain calm and take the following steps to ensure safety and legal compliance:</p>

        <div className="step">
          <h2>1. Ensure Safety First </h2>
          <p>Check for injuries and ensure your safety and that of others involved. If possible, move vehicles to a safe location away from traffic.</p>
          <img src="/images/EnsureSafetyFirst.webp" alt="Ensure safety first" className="image" />
        </div>

        <div className="step">
          <h2>2. Call Emergency Services </h2>
          <p>If there are injuries or significant damage, call emergency services immediately. Provide them with accurate information about the location.</p>
          <img src="/images/CallEmergencyServices.jpg" alt="Calling emergency services" className="image" />
        </div>

        <div className="step">
          <h2>3. Document the Incident</h2>
          <p>Take photos of the accident scene, vehicle damage, and any relevant road signs. Collect contact information from witnesses.</p>
          <img src="/images/DocumentTheIncident.jpg" alt="Documenting the incident" className="image" />
        </div>

        <div className="nav-links">
          <Link to="/guidelines-driving">Safe Driving Guidelines</Link> |
          <Link to="/why-important">Why Safety Is Important</Link>
        </div>
      </div>
    </div>
  );
}

export default AfterAccident;

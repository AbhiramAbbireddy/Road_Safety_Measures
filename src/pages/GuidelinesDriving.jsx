import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/guidelinesDriving.css';

function GuidelinesDriving() {
  return (
    <div className="guidelines-page">
      <div className="container">
        <h1>Essential Guidelines for Safe Driving</h1>
        <p>Developing safe driving habits is key to ensuring not only your safety but also the safety of others on the road.</p>

        <div className="guideline">
          <h2>1. Plan Your Route in Advance</h2>
          <p>Before hitting the road, plan your route. Use navigation apps to check for traffic conditions, road closures, or accidents to avoid delays.</p>
          <img src="/images/PlanYourRoute.jpg" alt="Route planning on a map" className="image" />
        </div>

        <div className="guideline">
          <h2>2. Take Regular Breaks</h2>
          <p>Long trips can be tiring. Take regular breaks to stretch, hydrate, and rest. Fatigue can lead to accidents, so it’s important to stay alert.</p>
          <img src="/images/TakeRegularBreaks.jpg" alt="Driver taking a break and stretching" className="image" />
        </div>

        <div className="guideline">
          <h2>3. Check Your Vehicle Regularly</h2>
          <p>Ensure that your vehicle is in good condition. Regularly check the brakes, tires, and fluid levels to avoid breakdowns or mechanical failures.</p>
          <img src="/images/CheckYourVehicle.jpg" alt="Person checking car engine" className="image" />
        </div>

        <div className="nav-links">
          <Link to="/importance-road-safety">Safe Driving Practices</Link> |
          <Link to="/after-accident">After an Accident</Link>
        </div>
      </div>
    </div>
  );
}

export default GuidelinesDriving;
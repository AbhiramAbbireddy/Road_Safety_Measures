import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/importanceRoadSafety.css';

function ImportanceRoadSafety() {
  return (
    <div className="importance-page">
      <div className="container">
        <h1>Safe Driving Practices</h1>
        <p>Safe driving practices promote responsibility on the road, helping prevent accidents and safeguarding communities. Here are some essential practices every driver should follow:</p>

        <div className="practice">
          <h2>1. Always Wear Your Seatbelt</h2>
          <p>Wearing a seatbelt is one of the simplest and most effective ways to protect yourself. It significantly reduces the risk of injury or death in an accident.</p>
          <img src="/images/AlwaysWearYourSeatbelt.png" alt="Person wearing a seatbelt" className="image" />
        </div>

        <div className="practice">
          <h2>2. Avoid Distractions</h2>
          <p>Stay focused on the road by avoiding distractions such as texting, talking on your phone, or adjusting the radio while driving.</p>
          <img src="/images/Avoid_Distractions.jpg" alt="No phone while driving sign" className="image" />
        </div>

        <div className="practice">
          <h2>3. Follow Speed Limits</h2>
          <p>Always adhere to posted speed limits and adjust your speed according to road conditions, traffic, and weather.</p>
          <img src="/images/Follow_Speed_Limits.jpg" alt="Speed Limit Sign" className="image" />
        </div>

        <div className="nav-links">
          <Link to="/traffic-rules">Traffic Rules</Link> |
          <Link to="/guidelines-driving">Essential Guidelines</Link>
        </div>
      </div>
    </div>
  );
}

export default ImportanceRoadSafety;
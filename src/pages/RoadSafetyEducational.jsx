import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/roadSafetyEducational.css';

function RoadSafetyEducational() {
  return (
    <div className="educational-page">
      
      <div className="container">
        <h1>Road Safety Educational</h1>
        
        <Link to="/why-important" className="block" id="why-important">
          <h2>Why Road Safety Is Important?</h2>
          <p>Learn why road safety is crucial for everyone and how it helps prevent accidents and save lives.</p>
        </Link>

        <Link to="/traffic-rules" className="block" id="traffic-rules">
          <h2>Traffic Rules and Signals</h2>
          <p>Understand the basic traffic rules and signals to make roads safer for all users.</p>
        </Link>

        <Link to="/importance-road-safety" className="block" id="safe-driving">
          <h2>Safe Driving Practices</h2>
          <p>Safe driving practices protect lives, reduce injuries, and ensure a smoother, more responsible road environment for everyone.</p>
        </Link>

        <Link to="/guidelines-driving" className="block" id="guidelines-driving">
          <h2>Essential Guidelines for Safe Driving</h2>
          <p>Explore essential guidelines for safe driving, including best practices to follow on the road.</p>
        </Link>

        <Link to="/after-accident" className="block" id="after-accident">
          <h2>Steps to Take After a Road Accident</h2>
          <p>Know the steps to take after an accident to ensure safety and proper documentation.</p>
        </Link>
      </div>
    </div>
  );
}

export default RoadSafetyEducational;
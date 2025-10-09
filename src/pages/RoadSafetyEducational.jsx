import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/roadSafetyEducational.css';

function RoadSafetyEducational() {
  // useState to remember if the sidebar is open or closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="educational-page">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/roadsafetyeducationbgvideo.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Sidebar */}
      <div className={isSidebarOpen ? 'sidebar active' : 'sidebar'}>
        <Link to="/why-important" onClick={toggleSidebar}>Why Road Safety Is Important?</Link>
        <Link to="/traffic-rules" onClick={toggleSidebar}>Traffic Rules and Signals</Link>
        <Link to="/importance-road-safety" onClick={toggleSidebar}>Safe Driving Practices</Link>
        <Link to="/guidelines-driving" onClick={toggleSidebar}>Essential Guidelines for Driving</Link>
        <Link to="/after-accident" onClick={toggleSidebar}>Steps After a Road Accident</Link>
      </div>

      {/* Open Button for Sidebar */}
      <button className="open-btn" onClick={toggleSidebar}>☰ Menu</button>

      {/* Main Content */}
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
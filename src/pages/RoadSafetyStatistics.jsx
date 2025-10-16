import React from 'react';
import '../styles/roadSafetyStatistics.css';

function RoadSafetyStatistics() {
  return (
    <div className="stats-page">
      <header>
        <h1>The Staggering Reality of Road Safety</h1>
        <p>Understanding the numbers is the first step toward creating change. These statistics reveal the global impact of road traffic incidents.</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <img 
            src="/images/global_icon.webp" 
            alt="Global" 
            className="icon" 
            style={{ width: '80px', height: '80px' }} 
          />
          <h3>A Life Lost </h3>
          <div className="stat-number">1.35 Million</div>
          <p className="stat-description">That's the number of people who die in road traffic accidents globally each year. It's the leading cause of death for people aged 5-29.</p>
        </div>

        <div className="stat-card">
          <img 
            src="/images/vulnerable_users_icon.webp" 
            alt="Vulnerable Users" 
            className="icon"
            style={{ width: '80px', height: '80px' }} 
          />
          <h3>Vulnerable Road Users</h3>
          <div className="stat-number">Over 50%</div>
          <p className="stat-description">More than half of all road traffic deaths are among vulnerable users: pedestrians, cyclists, and motorcyclists.</p>
        </div>

        <div className="stat-card">
          <img 
            src="/images/economic_cost_icon.jpg" 
            alt="Economic Cost" 
            className="icon" 
            style={{ width: '80px', height: '80px' }} 
          />
          <h3>A Drain on Economies</h3>
          <div className="stat-number">3% of GDP</div>
          <p className="stat-description">Road traffic crashes cost most countries 3% of their gross domestic product, hindering economic development.</p>
        </div>

        <div className="stat-card">
          <img 
            src="/images/distraction_icon.jpg" 
            alt="Distraction" 
            className="icon" 
            style={{ width: '80px', height: '80px' }} 
          />
          <h3>The Danger of Distraction</h3>
          <div className="stat-number">9x More Likely</div>
          <p className="stat-description">Drivers using a phone are approximately 4 to 9 times more likely to be involved in a crash than a driver who is not.</p>
        </div>
      </div>

      <div className="visuals-section">
        <h2>Visual Insights</h2>
        <div className="graph-container">
          <h3>Fatalities by Region</h3>
          <img className="graph" src="/images/graph.avif" alt="Road Traffic Deaths by Region" />
        </div>
        <div className="graph-container">
          <h3>Fatalities by Road User Type</h3>
          <img className="graph" src="/images/graph1.jpeg" alt="Road Traffic Fatalities by User Type" />
        </div>
      </div>

      <div className="did-you-know">
        <h2>Did You Know?</h2>
        <p>Wearing a seatbelt reduces the risk of death among front-seat passengers by 45-50%. It is one of the single most effective safety measures you can take.</p>
      </div>
    </div>
  );
}

export default RoadSafetyStatistics;

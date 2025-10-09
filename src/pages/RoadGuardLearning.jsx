import React from 'react';
import '../styles/roadGuardLearning.css';

function RoadGuardLearning() {
  return (
    <div className="road-guard-learning-page">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/videos/roadGuardBG.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <header>
          <h1>Road Safety Learning Hub</h1>
        </header>

        {/* Beginner Level Section */}
        <section className="level beginner">
          <h2>Beginner Level</h2>
          <div className="video-path">
            <div className="video-item"><a href="/videos/Basic-Road-Safety-Rules.mp4" target="_blank" rel="noopener noreferrer">Basic Road Safety Rules</a></div>
            <div className="video-item"><a href="/videos/Pedestrian-Safety.mp4" target="_blank" rel="noopener noreferrer">Pedestrian Safety</a></div>
            <div className="video-item"><a href="/videos/Seatbelt-Usage.mp4" target="_blank" rel="noopener noreferrer">Seatbelt Usage</a></div>
            <div className="video-item"><a href="/videos/The-Dangers-of-Drunk-Driving.mp4" target="_blank" rel="noopener noreferrer">Dangers of Drunk Driving</a></div>
            <div className="video-item"><a href="/videos/Cycling-Safety.mp4" target="_blank" rel="noopener noreferrer">Cycling Safety</a></div>
            <div className="video-item"><a href="/videos/Road-Signs-and-Markings.mp4" target="_blank" rel="noopener noreferrer">Road Signs and Markings</a></div>
          </div>
        </section>

        {/* Intermediate Level Section */}
        <section className="level intermediate">
          <h2>Intermediate Level</h2>
          <div className="video-path">
            <div className="video-item"><a href="/videos/Safe-Driving-Practices.mp4" target="_blank" rel="noopener noreferrer">Safe Driving Practices</a></div>
            <div className="video-item"><a href="/videos/Night-Driving-Safety.mp4" target="_blank" rel="noopener noreferrer">Night Driving Safety</a></div>
            <div className="video-item"><a href="/videos/Handling-Emergencies-on-the-Road.mp4" target="_blank" rel="noopener noreferrer">Handling Emergencies</a></div>
            <div className="video-item"><a href="/videos/Motorcycle-Safety.mp4" target="_blank" rel="noopener noreferrer">Motorcycle Safety</a></div>
            <div className="video-item"><a href="/videos/Bad-Weather-Driving.mp4" target="_blank" rel="noopener noreferrer">Bad Weather Driving</a></div>
            <div className="video-item"><a href="/videos/Safe-Overtaking-and-Lane-Changes.mp4" target="_blank" rel="noopener noreferrer">Safe Overtaking</a></div>
          </div>
        </section>

        {/* Advanced Level Section - ADDED */}
        <section className="level advanced">
          <h2>Advanced Level</h2>
          <div className="video-path">
            <div className="video-item"><a href="/videos/Driving-in-Heavy-Traffic.mp4" target="_blank" rel="noopener noreferrer">Driving in Heavy Traffic</a></div>
            <div className="video-item"><a href="/videos/Using-Technology-Safely.mp4" target="_blank" rel="noopener noreferrer">Using Technology Safely</a></div>
            <div className="video-item"><a href="/videos/Road-Rage-Prevention.mp4" target="_blank" rel="noopener noreferrer">Road Rage Prevention</a></div>
            <div className="video-item"><a href="/videos/Environmental-Impact-of-Road-Safety.mp4" target="_blank" rel="noopener noreferrer">Environmental Impact</a></div>
            <div className="video-item"><a href="/videos/First-Aid-for-Road-Accidents.mp4" target="_blank" rel="noopener noreferrer">First Aid for Accidents</a></div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default RoadGuardLearning;
import React from 'react';

function HeroSection({ onExploreClick }) {
  return (
    <section className="hero">
      <h1>Empowering Safer Roads</h1>
      <p>Your actions matter. Learn to make the roads safer for everyone, every day.</p>
      <button className="explore-button" onClick={onExploreClick}>
        Explore Topics
      </button>
    </section>
  );
}

export default HeroSection;
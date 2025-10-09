import React from 'react';
import '../styles/trafficRules.css';

function TrafficRules() {
  return (
    <div className="traffic-rules-page">
      <header>
        <h1>Traffic Rules and Signals for Beginners</h1>
      </header>

      <section>
        <div className="rule">
          <h2>1. Stop at Red Signal</h2>
          <p>Always stop when you see the red signal. It indicates that vehicles must halt to allow crossing traffic or pedestrians.</p>
          <img src="/images/red_signal.jpg" alt="Red Traffic Signal" className="image" />
          <p className="image-desc">Red traffic signal, indicating stop.</p>
        </div>

        <div className="rule">
          <h2>2. Follow the Speed Limit</h2>
          <p>Speed limits are established to ensure the safety of all road users. Exceeding these limits can lead to dangerous accidents.</p>
          <img src="/images/speed_limit.jpg" alt="Speed Limit Sign" className="image" />
          <p className="image-desc">Speed limit sign, indicating the maximum speed allowed.</p>
        </div>

        <div className="rule">
          <h2>3. Use Seat Belts</h2>
          <p>Always wear your seat belt. It can protect you from serious injuries in case of an accident.</p>
          <img src="/images/seat_belt.avif" alt="Seat Belt Sign" className="image" />
          <p className="image-desc">A reminder to always buckle up for safety.</p>
        </div>

        <div className="rule">
          <h2>4. Yield to Pedestrians</h2>
          <p>Allow pedestrians to cross at designated crossings. This keeps them safe while crossing roads.</p>
          <img src="/images/pedestrian_crossing.jpg" alt="Pedestrian Crossing Sign" className="image" />
          <p className="image-desc">A pedestrian crossing sign.</p>
        </div>
      </section>
    </div>
  );
}

export default TrafficRules;
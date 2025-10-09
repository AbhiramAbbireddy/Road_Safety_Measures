import React, { useState, useEffect } from 'react';
import { fetchStatistics } from '../api'; // Import our fake API function
import '../styles/roadSafetyStatistics.css';

function RoadSafetyStatistics() {
  // State to hold our data and loading status
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect runs once after the component mounts
  useEffect(() => {
    const getStats = async () => {
      const data = await fetchStatistics(); // Call the API
      setStats(data); // Store the data in state
      setLoading(false); // Set loading to false
    };

    getStats();
  }, []); // The empty array [] means this effect runs only once

  // While loading, show a loading message
  if (loading) {
    return (
      <div className="stats-page">
        <header>
          <h1>Loading Statistics...</h1>
        </header>
      </div>
    );
  }

  // Once loaded, show the data
  return (
    <div className="stats-page">
      <header>
        <h1>Road Safety Statistics: Understanding the Impact</h1>
      </header>

      <div className="container">
        <section>
          <h2>Global Road Safety Overview</h2>
          <p>Traffic accidents are one of the leading causes of death globally. The data below highlights key areas of concern and helps illustrate the importance of road safety initiatives worldwide.</p>
        </section>

        <section>
          <h2>Key Statistics</h2>
          <div className="statistics">
            {stats.keyStats.map((stat) => (
              <div key={stat.id} className="stat-box">
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Graphs and Visuals</h2>
          {stats.graphs.map((graph) => (
             <div key={graph.id} className="graph-container">
                <h3>{graph.title}</h3>
                <img className="graph" src={graph.image} alt={graph.title} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default RoadSafetyStatistics;
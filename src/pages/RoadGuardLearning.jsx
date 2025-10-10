import React, { useState } from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';
import '../styles/roadGuardLearning.css';


const learningData = [
  {
    level: "Beginner",
    videos: [
      { title: "Basic Road Safety Rules", link: "/videos/Basic-Road-Safety-Rules.mp4" },
      { title: "Pedestrian Safety", link: "/videos/Pedestrian-Safety.mp4" },
      { title: "Seatbelt Usage", link: "/videos/Seatbelt-Usage.mp4" },
      { title: "Dangers of Drunk Driving", link: "/videos/The-Dangers-of-Drunk-Driving.mp4" },
      { title: "Cycling Safety", link: "/videos/Cycling-Safety.mp4" },
      { title: "Road Signs and Markings", link: "/videos/Road-Signs-and-Markings.mp4" },
    ]
  },
  {
    level: "Intermediate",
    videos: [
      { title: "Safe Driving Practices", link: "/videos/Safe-Driving-Practices.mp4" },
      { title: "Night Driving Safety", link: "/videos/Night-Driving-Safety.mp4" },
      { title: "Handling Emergencies", link: "/videos/Handling-Emergencies-on-the-Road.mp4" },
      { title: "Motorcycle Safety", link: "/videos/Motorcycle-Safety.mp4" },
      { title: "Bad Weather Driving", link: "/videos/Bad-Weather-Driving.mp4" },
      { title: "Safe Overtaking", link: "/videos/Safe-Overtaking-and-Lane-Changes.mp4" },
    ]
  },
  {
    level: "Advanced",
    videos: [
      { title: "Driving in Heavy Traffic", link: "/videos/Driving-in-Heavy-Traffic.mp4" },
      { title: "Using Technology Safely", link: "/videos/Using-Technology-Safely.mp4" },
      { title: "Road Rage Prevention", link: "/videos/Road-Rage-Prevention.mp4" },
      { title: "Environmental Impact", link: "/videos/Environmental-Impact-of-Road-Safety.mp4" },
      { title: "First Aid for Accidents", link: "/videos/First-Aid-for-Road-Accidents.mp4" },
    ]
  }
];

function RoadGuardLearning() {
  
  const [activeLevel, setActiveLevel] = useState(0); // Open the "Beginner" level by default

  const toggleLevel = (levelIndex) => {
    
    setActiveLevel(activeLevel === levelIndex ? null : levelIndex);
  };

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

        
        {learningData.map((section, index) => (
          <div key={index} className={`level ${activeLevel === index ? 'active' : ''}`}>
            <div className="level-header" onClick={() => toggleLevel(index)}>
              <h2>{section.level} Level</h2>
              <ChevronDown className="icon" size={32} />
            </div>
            <div className="video-path">
              {section.videos.map((video, videoIndex) => (
                <div key={videoIndex} className="video-item">
                  <a href={video.link} target="_blank" rel="noopener noreferrer">
                    {video.title}
                  </a>
                  <PlayCircle className="play-icon" size={28} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoadGuardLearning;
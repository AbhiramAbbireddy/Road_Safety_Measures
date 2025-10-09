import React, { useRef } from 'react';
import { Book, Shield, ClipboardCheck, BarChart2 } from 'lucide-react'; // Import icons
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import '../styles/home.css';

function Home() {
  const aboutSectionRef = useRef(null);

  const handleExploreClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onExploreClick={handleExploreClick} />

      <section className="about" ref={aboutSectionRef}>
        <div className="about-content">
          <h2>About Us</h2>
          <p>Our mission is to raise awareness about road safety through education, resources, and community support. Join us in making roads safer for all users by learning safe driving and pedestrian practices.</p>
        </div>
      </section>

      <section className="topics">
        <h2>Our Road Safety Topics</h2>
        <div className="card-container">
          <Card 
            icon={<Book size={40} />}
            title="Road Safety Basics" 
            description="Learn the fundamentals of staying safe on the road."
            link="/road-safety-educational" 
          />
          <Card 
            icon={<Shield size={40} />}
            title="RoadGuard Learning"
            description="Interactive video lessons for all skill levels."
            link="/road-guard-learning" 
          />
          <Card 
            icon={<ClipboardCheck size={40} />}
            title="Test Your Knowledge"
            description="Take our quiz to see how much you know." 
            link="/quiz" 
          />
           <Card 
            icon={<BarChart2 size={40} />}
            title="Road Safety Statistics"
            description="Understand the impact of road accidents with data." 
            link="/statistics" 
          />
        </div>
      </section>
    </>
  );
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../styles/card.css';

function Card({ icon, title, description, link }) {
  return (
    <Link to={link} className="topic-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span>Learn More</span>
        <ArrowRight className="arrow-icon" size={20} />
      </div>
    </Link>
  );
}

export default Card;
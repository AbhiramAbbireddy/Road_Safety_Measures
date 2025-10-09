import React from 'react';
import '../styles/whyImportant.css';

function WhyImportant() {
  return (
    <div className="page-container">
      <header>
        <h1>Why Road Safety Is Important?</h1>
        <p>Driving Safe, Living Safe</p>
      </header>

      <section>
        <div className="content">
          <h2>Protecting Lives</h2>
          <p>The foremost reason for prioritizing road safety is the protection of human life. According to the World Health Organization, approximately <strong>1.35 million people die each year</strong> due to road traffic accidents, making it one of the leading causes of death globally.</p>
          <img src="/images/road-accident.jpg" alt="Car crash scene" className="image" />
        </div>

        <div className="content">
          <h2>Preventing Injuries</h2>
          <p>Road accidents often lead to severe injuries that can have lasting physical, emotional, and financial impacts on individuals and their families. Implementing safety measures such as wearing seat belts and obeying speed limits can reduce the risk of injuries by up to <strong>50%</strong>.</p>
          <img src="/images/preventing_injuries.jpg" alt="Safe driving behavior" className="image" />
        </div>

        <div className="content">
          <h2>Economic Impact</h2>
          <p>Road accidents impose a substantial economic burden on society, costing billions annually in medical expenses, property damage, and lost productivity. By promoting road safety, governments can save significant amounts of money.</p>
          <img src="/images/EconominalImpact.webp" alt="Economic Impact" className="image" />
        </div>

        <div className="content">
          <h2>Collective Responsibility</h2>
          <p>Road safety is a shared responsibility that requires the commitment of all road users. Education and awareness campaigns are vital in instilling a culture of responsibility among drivers, pedestrians, and cyclists alike.</p>
          <img src="/images/CollectiveResponsibility.jpg" alt="Collective Responsibility" className="image" />
        </div>
      </section>
    </div>
  );
}

export default WhyImportant;
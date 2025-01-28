import React from 'react';
import "./../styles/Experience.css"

const experiences = [
  { number: 1, title: 'Search for the best properties', text: 'Donec ac felis interdum, ultricies ligula id, pharetra est. Vivamus tellus massa, vehicula quis ante at, eleifend porta justo.' },
  { number: 2, title: 'Become a SuperNest tenant', text: 'Donec ac felis interdum, ultricies ligula id, pharetra est. Vivamus tellus massa, vehicula quis ante at, eleifend porta justo.' },
  { number: 3, title: 'Go digital with the mobile app', text: 'Donec ac felis interdum, ultricies ligula id, pharetra est. Vivamus tellus massa, vehicula quis ante at, eleifend porta justo.' },
  { number: 4, title: 'Go digital with the mobile app', text: 'Donec ac felis interdum, ultricies ligula id, pharetra est. Vivamus tellus massa, vehicula quis ante at, eleifend porta justo.' },
];

const Experience = () => {
    const formatNumber = (number) => (number < 10 ? `0${number}` : number);

  return (
    <div className="experience-container">
      <h1 className='experience-title'>The SuperNest rental experience</h1>
      <div className='experience-cards'>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-number">{formatNumber(exp.number)}</div>
              <div className="card-title">{exp.title}</div>
              <div className="card-text">{exp.text}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;

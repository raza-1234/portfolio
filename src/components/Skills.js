import "../css/Skill.css";

import React from 'react';
import { skillsData } from '../db/data';

const Skills = () => {
  return (
    <div className="portfolio_skill-wrapper">
      <h2>My Experties</h2>
      <div className="portfolio_skill_info">
        {skillsData.map((skill) => (
          <div className="portflio_skill" key={skill.id}>
            <div className="portfolio_skill-img-wrapper">
              <img
                src={require(`../assets/${skill.img}`)}
                alt={skill.title}
              />
            </div>
            <h3>{skill.title}</h3>
            <p className="portfolio_skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills

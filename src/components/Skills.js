import "../css/Skill.css";

import React from "react";
import { skillsData } from "../db/data";

const Skills = () => {
  // let circularProgress = document.querySelector(".circular-progress");
  // let progressValue = document.querySelector(".circular-progress-value");

  // let progressStartValue = 0;
  // let progressEndValue = 90;
  // let speed = 100;

  // let progress = setInterval(() => {
  //   progressStartValue++;
  //   progressValue.textContent = `${progressStartValue}`;
  //   circularProgress.style.background = `conic-gradient(#7d2ae8${progressStartValue * 3.6}deg, #ededed 0deg)`;

  //   if (progressStartValue == progressEndValue) {
  //     clearInterval(progress);
  //   }
  // }, speed);

  return (
    <div className="portfolio_skill-wrapper" id="Skills">
      <h2>Skills</h2>
      <div className="portfolio_skill_info">
        {skillsData.map((skill) => (
          <div className="portflio_skill" key={skill.id}>
            <div className="portfolio_skill-img-wrapper">
              <img src={require(`../assets/${skill.img}`)} alt={skill.title} />
            </div>
            <h3>{skill.title}</h3>
            <p className="portfolio_skill-description">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="skills-bar">
        <div className="technical-skills">
          <h4>Technical Skills</h4>

          <li>
            <h3>JavaScript</h3>
            <span className="bar">
              <span className="javascript">.</span>
            </span>
          </li>

          <li>
            <h3>React</h3>
            <span className="bar">
              <span className="react">.</span>
            </span>
          </li>

          <li>
            <h3>Node</h3>
            <span className="bar">
              <span className="node">.</span>
            </span>
          </li>

          <li>
            <h3>Test Cases</h3>
            <span className="bar">
              <span className="bootstrap">.</span>
            </span>
          </li>

          <li>
            <h3>Database</h3>
            <span className="bar">
              <span className="html">.</span>
            </span>
          </li>

          <li>
            <h3>Css</h3>
            <span className="bar">
              <span className="css">.</span>
            </span>
          </li>
        </div>

        <div className="professionals-skills">
          <h4>Profssional Skills</h4>

          <div className="circular-progress-flex">
            <div className="circular-prog-container">
              <div className="circular-progress">
                <span className="circular-progress-value">80%</span>
              </div>
              <span className="circular-progress-text">Communication</span>
            </div>

            <div className="circular-prog-container">
              <div className="circular-progress">
                <span className="circular-progress-value">90%</span>
              </div>
              <span className="circular-progress-text">Team Work</span>
            </div>

            <div className="circular-prog-container">
              <div className="circular-progress">
                <span className="circular-progress-value">70%</span>
              </div>
              <span className="circular-progress-text">Project Management</span>
            </div>

            <div className="circular-prog-container">
              <div className="circular-progress">
                <span className="circular-progress-value">81%</span>
              </div>
              <span className="circular-progress-text">Problems Solving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

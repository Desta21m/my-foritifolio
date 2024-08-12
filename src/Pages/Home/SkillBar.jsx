import React, { useEffect } from 'react';
import AOS from 'aos';
import './bar.css';

const skillsData = {
    programmingLanguages: [
      { name: 'Java', percentage: 90 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'Html', percentage: 75 },
      { name: 'Css', percentage: 75 },
    ],
    frameworks: [
      { name: 'SpringBoot', percentage: 80 },
      { name: 'Express', percentage: 70 },
    ],
    libraries: [
      { name: 'React', percentage: 75 },
      { name: 'JavaFX', percentage: 60 },
    ],
    tools: [
      { name: 'Git & Github', percentage: 80 },
      { name: 'eraser UML', percentage: 70 },
      { name: 'PixlLab', percentage: 70 },
    ],
  };
function SkillBar() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
        });
      }, []);
    
      const renderSkillBars = (skills) => {
        return skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="100"
                style={{ width: `${skill.percentage}%` }}
              >
                <span className="percentage">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ));
      };
  return (
    <div className="skills-section">
    {Object.keys(skillsData).map((category, index) => (
      <div key={index} className="skill-category">
        <h2>{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
        {renderSkillBars(skillsData[category])}
      </div>
    ))}
  </div>
);
}

export default SkillBar
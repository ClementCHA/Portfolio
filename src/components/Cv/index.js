import React from 'react';
import education from 'src/assets/CV/Education.svg';
import experience from 'src/assets/CV/Experience.svg';
import skills from 'src/assets/CV/Skills.svg';
import volontariat from 'src/assets/CV/Volontariat.svg';

import './styles.scss';

export default function CV() {
  return (
    <div className="cv">
      <div className="aboutMe">
        A propos de moi
      </div>
      <div className="figmaImport">
        <img src={education} alt="education" className="figmaImport-education" />
        <img src={skills} alt="skills" className="figmaImport-skills" />
        <img src={experience} alt="experience" className="figmaImport-experience" />
        <img src={volontariat} alt="volontariat" className="figmaImport-volontariat" />
      </div>
    </div>
  );
}

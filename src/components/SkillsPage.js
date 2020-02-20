import React from 'react';

import Skill from './Skill';
import skills from '../data';

function SkillsPage() {
  const skillsEl = skills.map(skill => <Skill data={skill} />); // eslint-disable-line
  return (
    <div className="skills-page">
      {skillsEl}
    </div>
  );
}

export default SkillsPage;

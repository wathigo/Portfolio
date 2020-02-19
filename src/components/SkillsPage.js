import React from 'react';

import Skill from './Skill'

function SkillsPage() {
  const skills = [
    {
      name: 'HTML5',
      description: ['Use of Semantic elements', 'Creation of mobile responsive pages', 'Bootstrap']
    },
    {
      name: 'Ruby',
      description: ['Object Oriented Programming', 'Single responsibility Rule', 'Clean and readable code', 'Functional Programming']
    },
    {
      name: 'Ruby on Rails',
      description: ['Authentication', 'Associations', 'Rails API']
    },
    {
      name: 'JavaScript',
      description: ['Es6 syntax', 'Functional programming', 'Writing clean and readable code']
    },
    {
      name: 'React-redux',
      description: ['Use of React Hooks', 'Redux for state management']
    }
  ]
  const skillsEl = skills.map(skill => <Skill data={skill}/>)
  return (
    <div className="skills-page">
      {skillsEl}
    </div>
  );
}

export default SkillsPage;

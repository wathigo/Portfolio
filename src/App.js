import React from 'react';
import './App.css';

import LandingPage from './components/LandingPage';
import SkillsPage from './components/SkillsPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <h2>TOP SKILLS</h2>
      <SkillsPage />
    </div>
  );
}

export default App;

import React from 'react';

import PersonalInfo from './PersonalInfo';
import ScrollDownAnime from './ScrollDownAnime';

function LandingPage() {
  return (
    <div className="landing-page">
      <PersonalInfo />
      <ScrollDownAnime />
    </div>
  );
}

export default LandingPage;

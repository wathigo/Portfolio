import React, { useState, useEffect } from 'react';

import animateScroll from './SmoothScroll';

function ScrollDownAnime() {
  const [loaded, setLoaded] = useState(false); // eslint-disable-line no-unused-vars
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.scroll-icon').style.visibility = 'visible';
    }, 9000);
  });
  return (
    <div id='scroll' className="scroll-icon" onLoad={() => setLoaded(true)}>
      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
      <span onClick={handleClick} className="text">View my Skills</span>
    </div>
  );
}

const handleClick = () => {
  animateScroll('pos')
}

export default ScrollDownAnime;

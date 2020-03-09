import React, { useState, useEffect } from 'react';

import animateScroll from './SmoothScroll';


const handleClick = e => {
  e.preventDefault();
  animateScroll('pos');
};

function ScrollDownAnime() {
  const [loaded, setLoaded] = useState(false); // eslint-disable-line no-unused-vars
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.scroll-icon').style.visibility = 'visible';
    }, 9000);
  });
  return (
    <div id="scroll" onClick={handleClick} className="scroll-icon" onLoad={() => setLoaded(true)}>
      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
      <span className="text">View my Skills</span>
    </div>
  );
}

export default ScrollDownAnime;

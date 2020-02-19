import React, { useState, useEffect } from 'react';

function ScrollDownAnime() {
  const [loaded, setLoaded] = useState(false); // eslint-disable-line no-unused-vars
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.scroll-icon').style.visibility = 'visible';
    }, 5000);
  });
  return (
    <div className="scroll-icon" onLoad={() => setLoaded(true)}>
      <div className="chevron" />
      <div className="chevron" />
      <div className="chevron" />
      <span className="text">View my Skills</span>
    </div>
  );
}

export default ScrollDownAnime;

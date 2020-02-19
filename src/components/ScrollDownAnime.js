import React, { useState, useEffect } from 'react';

function ScrollDownAnime() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.scroll-icon').style.visibility = 'visible';
    }, 5000)
  });
  return (
    <div className="scroll-icon" onload={ () => setLoaded(true) }>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
      <span class="text">View my Skills</span>
    </div>
  );
}

export default ScrollDownAnime;

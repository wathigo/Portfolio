import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from './VisibilitySensor';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 70, (x - window.innerWidth / 2) / 70, 1.01]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Skill = props => {
  const rootNode = useRef(null);

  const showOverlay = (id) => { // eslint-disable-line
    document.querySelector(`.${id}`).style.visibility = 'visible';
  }

  const hideOverlay = (id) => { // eslint-disable-line
    document.querySelector(`.${id}`).style.visibility = 'hidden';
  }

  const { data } = props;
  const technologies = data.tec.map(desc => <li>{desc}</li>); // eslint-disable-line

  const [anime, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return ( /* eslint-disable */
    <div>
      <VisibilitySensor once partialVisibility>
        {({ isVisible }) => (
          <Spring delay={data.animation} to={{ opacity: isVisible ? 1 : 0 }}>
            {({ opacity }) => (
              <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={
                  {
                    transform: anime.xys.interpolate(trans),
                    opacity: opacity
                  }
                }
                ref={rootNode}
                className="skill wow"
              >
                <div onMouseEnter={() => { showOverlay(`o-${data.id}`); }} onMouseLeave={() => { hideOverlay(`o-${data.id}`); }} className="img-cont">
                  <div className={`overlay + o-${data.id}`}>
                    <p>
                      <a href={data.src} className='l-1' rel="noopener noreferrer" target="_blank"><i className="fas fa-link"></i> Live Demo </a>
                      <a href={data.github} className='l-2' rel="noopener noreferrer" target="_blank"><i className="fab fa-github-alt"></i> Git Repo </a>
                    </p>
                  </div>
                  <figure>
                    <img src={require(`../images/${data.img}`)} alt="project screenshot" />
                  </figure>
                </div>
                <div className='btm'>
                  <div className="desc">
                    <h3>{data.name}</h3>
                    <div className='head'><h4>About Project</h4></div>
                    <p>
                      {data.description}
                    </p>
                  </div>

                  <div className="tec-cont">
                    <h4>Technologies</h4>
                    <ul>
                      {technologies}
                    </ul>
                  </div>
                </div>

              </animated.div>
            )}
          </Spring>
        )}
      </VisibilitySensor>

    </div >
  );
}

Skill.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
};

export default Skill;

import React from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';

class Skill extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.showOverlay = this.showOverlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
  }

  showOverlay(id) { // eslint-disable-line
    document.querySelector(`.${id}`).style.visibility = 'visible';
  }

  hideOverlay(id) { // eslint-disable-line
    document.querySelector(`.${id}`).style.visibility = 'hidden';
  }

  render() {
    const { data } = this.props;
    const description = data.description.map(desc => <li>{desc}</li>); // eslint-disable-line
    const technologies = data.tec.map(desc => <li>{desc}</li>); // eslint-disable-line
    return (/* eslint-disable */ 
      <ReactWOW animation={data.animation} scroll data-wow-duration="2s" data-wow-delay="5s">
        <div className="skill wow">
          <div onMouseEnter={() => { this.showOverlay(`o-${data.id}`); }} onMouseLeave={() => { this.hideOverlay(`o-${data.id}`); }} className="img-cont">
            <div className={`overlay + o-${data.id}`}>
              <a href={data.src} rel="noopener noreferrer" target="_blank"> Live Demo </a>
            </div>
            <figure>
              <img src={require(`../images/${data.id}.png`)} alt="project screenshot" />
            </figure>
          </div>
          <div className="desc">
            <h3>{data.name}</h3>
            <h4>Knowledge Acquired</h4>
            <ul>
              {
              description
          }
            </ul>
          </div>

          <div className="tec-cont">
            <h4>Technologies</h4>
            <ul>
              {technologies}
            </ul>
          </div>

        </div>
      </ReactWOW>
    );
  }
}

Skill.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
};

export default Skill;

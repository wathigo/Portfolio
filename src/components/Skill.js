import React from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';

class Skill extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data } = this.props;
    const description = data.description.map(desc => <li>{desc}</li>); // eslint-disable-line
    return (
      <ReactWOW animation={data.animation} scroll data-wow-duration="2s" data-wow-delay="5s">
        <div className="skill wow">
          <h3>{data.name}</h3>
          <h4>Knowledge Acquired</h4>
          <ul>
            {
            description
        }
          </ul>
        </div>
      </ReactWOW>
    );
  }
}

Skill.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
};

export default Skill;

import React from 'react';
// import PropTypes from 'prop-types';

class Skill extends React.Component {
  render() {
    const {data} = this.props;
    console.log(data)
    const description = data.description.map(desc => <li>{desc}</li>)
    return (
      <div className="skill">
        <h3>{data.name}</h3>
        <h4>Knowledge Acquired</h4>
        <ul>
          {
            description
        }
        </ul>
      </div>
    );
  }
}

// Skill.propTypes = {
//    data: PropTypes.object.isRequired
// };

export default Skill;

import React, { Component } from 'react';
import Stat from './Stat';
import PropTypes from 'prop-types';


class Tamagotchi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: null,
      water: null,
      activity: null,
    }
  }
  render() {
    return (
      <div>


          <p>
            Individual tamagotchi Component
          </p>


      </div>
    );
  }
}
Tamagotchi.propTypes = {
  food: PropTypes.number,
  water: PropTypes.number,
  activity: PropTypes.number
}
export default Tamagotchi;

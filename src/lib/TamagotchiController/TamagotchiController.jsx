import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class TamagotchiController extends Component {
  constructor() {
    super();
    this.state = {
      tamagotchiList: []
    };
  }
  render() {
    return (
      <div>

        <Link to='/tamagotchi/new-tamagotchi'>Create a new Tamagotchi</Link>
          <p>
            TamagotchiController
          </p>


      </div>
    );
  }
}

export default TamagotchiController;

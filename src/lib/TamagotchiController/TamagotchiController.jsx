import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TamagotchiList from './TamagotchiList';


class TamagotchiController extends Component {
  constructor() {
    super();
    this.state = {
      tamagotchiList: []
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }
  handleAddingNewItemToList(newTamagotchi){
    var newTamagotchiList = this.state.tamagotchiList.slice();
    newTamagotchi.formattedWaitTime = (newTamagotchi.timeCreated).fromNow(true);
    newTamagotchiList.push(newTamagotchi);
    this.setState({tamagotchiList: newTamagotchiList});
  }
  render() {
    return (
      <div>

          <p>
            TamagotchiController
          </p>
          <Link to='/tamagotchi/new-tamagotchi'>Create a new Tamagotchi</Link>
          <TamagotchiList tamagotchiList={this.state.tamagotchiList}/>


      </div>
    );
  }
}

export default TamagotchiController;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TamagotchiList from './TamagotchiList';
import NewTamagotchi from './NewTamagotchi';


class TamagotchiController extends Component {
  constructor() {
    this.state = {
      tamagotchiList: [],
      form: false
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }
  handleAddingNewTamagotchiToList(newTamagotchi){
    var newTamagotchiList = this.state.tamagotchiList.slice();
    newTamagotchi.formattedWaitTime = (newTamagotchi.timeCreated).fromNow(true);
    newTamagotchiList.push(newTamagotchi);
    this.setState({tamagotchiList: newTamagotchiList});
  }
  toggleForm() {
    if (this.state.form == false) {
      this.setState({form: true})
    } else {
      this.setState({form: false})
    }
  }
  render() {
    return (
      <div>
        <p>
          TamagotchiController
        </p>
        <button onClick={()=> this.toggleForm()}>Add a Tamagotchi</button>
        <TamagotchiList tamagotchiList={this.state.tamagotchiList}/>
        {this.state.form ? <NewTamagotchi onNewTamagotchiCreation={this.handleAddingNewTamagotchiToList}/> : null}
      </div>
    );
  }
}

export default TamagotchiController;

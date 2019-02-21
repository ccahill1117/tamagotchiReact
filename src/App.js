import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Error404 from './lib/Error404';
import Landing from './lib/Landing/Landing';
import TamagotchiController from './lib/TamagotchiController/TamagotchiController';
import NewTamagotchi from './lib/TamagotchiController/NewTamagotchi';
import Header from './lib/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/tamagotchi' component={TamagotchiController} />
            <Route component={Error404} />
          </Switch>
      </div>
    );
  }
}

export default App;

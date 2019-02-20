import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Test from './lib/test';
import Error404 from './lib/Error404';
import Landing from './lib/landing';
import Tamagotchi from './lib/tamagotchi/tamagotchi';
import Header from './lib/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/test' component={Test} />
            <Route exact path='/tamagotchi' component={Tamagotchi} />
            <Route component={Error404} />
          </Switch>
      </div>
    );
  }
}

export default App;

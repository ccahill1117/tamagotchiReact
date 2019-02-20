import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Test from './lib/test';
import Error404 from './lib/Error404';
import Landing from './lib/landing';

class App extends Component {
  render() {
    return (
      <div>

          <p>
            hello
          </p>

          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/test' component={Test} />
            <Route component={Error404} />
          </Switch>



      </div>
    );
  }
}

export default App;

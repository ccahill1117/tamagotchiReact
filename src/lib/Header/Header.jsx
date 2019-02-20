import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div>

        <h1>header</h1>
        <h4><Link to='/'>Home Page</Link></h4>

        <h4><Link to='/tamagotchi/new-tamagotchi'>Create a new Tamagotchi</Link></h4>

      </div>
    );
  }
}

export default Header;

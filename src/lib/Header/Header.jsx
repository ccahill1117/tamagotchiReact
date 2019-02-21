import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <div style={{
        padding: '20px',
        margin: '20px',
        borderStyle: 'solid',
        }}>

        <h1>header</h1>
        <h4><Link to='/'>Home Page</Link></h4>

        <h4><Link to='/tamagotchi'>Start</Link></h4>

      </div>
    );
  }
}

export default Header;

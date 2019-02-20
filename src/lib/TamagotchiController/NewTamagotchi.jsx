import React, { Component } from 'react';
import { v4 } from 'uuid';
import Tamagotchi from './Tamagotchi/Tamagotchi';
import PropTypes from 'prop-types';
import Moment from 'moment';



function NewTamagotchi(props) {
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({name: _name.value, id: v4()});
    _name.value = '';
  }

    return (
      <div style = {{
        padding: '20px',
        margin: '20px',
        borderStyle: 'solid',
        }}>
        <form onSubmit={handleNewTamagotchiFormSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Tama name'
            ref={(input) => {_name = input;}}/>
          <br></br>

          <button type='submit'>Leave your message!</button>
        </form>
      </div>
    );

}

NewTamagotchi.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
}

export default NewTamagotchi;

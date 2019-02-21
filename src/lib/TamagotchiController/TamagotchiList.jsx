import React from 'react';
import PropTypes from 'prop-types';
import Tamagotchi from './Tamagotchi/Tamagotchi';

function TamagotchiList(props) {
  return (
    <div>
      <p>
        {props.tamagotchiList.map((tama) =>
          <Tamagotchi
            food={tama.food}
            water={tama.water}
            activity={tama.activity}
            key={tama.id}
          />
        )}
      </p>
    </div>
  );
}
TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array
}
export default TamagotchiList;

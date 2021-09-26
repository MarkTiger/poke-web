import React from 'react';
import capitalize from '../helpers/capitalize';

import item_bg from '../assets/item_bg.png';
import { useHistory } from 'react-router-dom';

export default function ListItem({ pokemon, index }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/' + index);
  };

  return (
    <div className="w-50 p-lg-3 p-2">
      <div
        onClick={handleClick}
        className={`p-3 rounded h-100 ${pokemon.types[0].type.name} d-flex flex-column justify-content-center position-relative cursor-pointer`}
        style={{
          backgroundImage: `url(${item_bg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '100%',
        }}
      >
        <h4 className="text-light">{capitalize(pokemon.name)}</h4>
        {pokemon.types.map((el) => {
          return (
            <span
              className="type p-1 rounded w-50 text-center text-light mb-1"
              key={`${pokemon.name}-type-${el.slot}`}
            >
              {capitalize(el.type.name)}
            </span>
          );
        })}
        <img
          src={pokemon.sprites.front_default}
          alt="pokemon"
          className="position-absolute itemImg"
        />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import background from '../assets/background.png';
import ListItem from '../components/ListItem';
import { fetchPokemons } from '../stores/action';

export default function Home() {
  const { pokemons } = useSelector(({ pokemons }) => {
    return {
      pokemons,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <div
      className="vh-100 d-flex flex-column p-3"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
      }}
    >
      <h1 className="fw-bold">Pokedex</h1>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap container">
          {pokemons.map((pokemon, i) => {
            return <ListItem key={pokemon.id} pokemon={pokemon} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

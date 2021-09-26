import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import capitalize from '../helpers/capitalize';
import detail_bg from '../assets/detail_bg.png';
import background from '../assets/background.png';
import { fetchPokemons } from '../stores/action';
import createId from '../helpers/createId';

export default function Detail() {
  const params = useParams();
  const { pokemon, isLoading } = useSelector(({ pokemons, isLoading }) => {
    return {
      pokemon: pokemons[params.index],
      isLoading,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div
        className="vh-100 d-flex flex-column align-items-center justify-content-center p-3"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="fw-bold">Loading</h1>
      </div>
    );
  } else {
    return (
      <div
        className={`${pokemon.types[0].type.name} vh-100 d-flex flex-column text-light pt-3 position-relative`}
        style={{
          backgroundImage: `url(${detail_bg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '20%',
        }}
      >
        <h3 style={{ top: '8%', right: '8%', position: 'absolute' }}>
          {createId(pokemon.id)}
        </h3>
        <div
          className="position-absolute"
          style={{
            width: '50%',
            height: '34%',
            backgroundImage: `url(${pokemon.sprites.front_default})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
          }}
        ></div>
        <div className="flex-grow-1 px-3">
          <h1 className="fw-bold">{capitalize(pokemon.name)}</h1>
          <div className="d-flex">
            {pokemon.types.map((el, i) => {
              return (
                <span
                  className="py-1 px-2 rounded type me-3"
                  key={'pokemon-types-' + i}
                >
                  {capitalize(el.type.name)}
                </span>
              );
            })}
          </div>
        </div>
        <div className="bg-light p-3 text-dark top-rounded-custom">
          <Tabs
            defaultActiveKey="about"
            id="uncontrolled-tab-example"
            className="mb-3 justify-content-center"
          >
            <Tab eventKey="about" title="About">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <ul className="detailItem">
                      <li>Species</li>
                      <li>Height</li>
                      <li>Weight</li>
                      <li>Abilities</li>
                      <li>Base Exp</li>
                    </ul>
                  </div>
                  <div className="col-9">
                    <ul className="detailItem" style={{ fontWeight: 'normal' }}>
                      <li>{capitalize(pokemon.species.name)}</li>
                      <li>
                        {((pokemon.height / 10) * 3.281).toFixed(2)} ft (
                        {pokemon.height / 10} m)
                      </li>
                      <li>
                        {((pokemon.weight / 10) * 2.205).toFixed(2)} lbs (
                        {pokemon.weight / 10} kg)
                      </li>
                      <li>
                        {pokemon.abilities.map((el, i, arr) => {
                          return (
                            capitalize(el.ability.name) +
                            (i === arr.length - 1 ? '' : ', ')
                          );
                        })}
                      </li>
                      <li>{pokemon.base_experience}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="basestats" title="Base Stats">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <ul className="detailItem">
                      {pokemon.stats.map((el, i) => {
                        return (
                          <li key={'pokemon-stat-' + i}>
                            {capitalize(el.stat.name)}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="col-9">
                    <ul className="detailItem" style={{ fontWeight: 'normal' }}>
                      {pokemon.stats.map((el, i) => {
                        return (
                          <li key={'pokemon-stat-' + i}>
                            <div className="d-flex align-items-center">
                              <span className="w-25 text-center">
                                {capitalize(el.base_stat.toString())}
                              </span>
                              <div
                                style={{ minHeight: '4px', width: '100%' }}
                                className="custom-bg-grey flex-grow-1 ms-2 rounded"
                              >
                                <div
                                  className={`bg-${
                                    el.base_stat >= 50 ? 'success' : 'danger'
                                  } rounded`}
                                  style={{
                                    width: `${
                                      el.base_stat < 100 ? el.base_stat : 100
                                    }%`,
                                    minHeight: '4px',
                                  }}
                                ></div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="moves" title="Moves">
              <div className="container">
                <div className="row">
                  <div className="col-12 overflow-auto">
                    <ul className="detailItem">
                      {pokemon.moves.map((el, i) => {
                        return (
                          <li key={'moves-pokemon-' + i}>
                            {capitalize(el.move.name)}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

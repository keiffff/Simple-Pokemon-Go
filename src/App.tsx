import React, {useState} from 'react';
import logo from './logo.svg';
import {css, keyframes} from 'emotion';
import axios from 'axios';

const indexPageStyle = css({
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
  color: 'white',
});

const headerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
});

const logoSpin = keyframes(`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`);

const logoStyle = css({
  animation: `${logoSpin} infinite 20s linear`,
  height: '20vmin',
  pointerEvents: 'none',
});

const DEFAULT_API_CONFIG = {
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
};

const axiosClient = axios.create(DEFAULT_API_CONFIG);

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [appearance, setAppeaRance] = useState('');

  const getPokemon = async (id: number) => {
    try {
      const res = await axiosClient.get(`/pokemon/${id}`);
      const pokemon = res.data;
      setName(pokemon.forms[0].name);
      setAppeaRance(pokemon.sprites.front_default);

      return pokemon;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    const lastPokemonId = 807;
    const pokemonId = Math.floor(Math.random() * (lastPokemonId + 1));
    getPokemon(pokemonId);
  };

  return (
    <div className={indexPageStyle}>
      <header className={headerStyle}>
        <img src={logo} className={logoStyle} alt="logo" />
      </header>
      <img src={appearance} />
      <p>{name}</p>
      <button onClick={handleSubmit}>Show Pokemon (random)</button>
    </div>
  );
};

export default App;

import React, {useState} from 'react';
import logo from './logo.svg';
import {css, keyframes} from 'emotion';
import {Button, Loader} from 'semantic-ui-react';
import axios from 'axios';

const indexPageStyle = css({
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
});

const headerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: '#61DAFB',
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

const wrapperStyle = css({
  padding: '20px 0 20px 0',
  width: '80%',
  margin: '0 auto',
  background: '#FFFFFF',
  height: 'auto',
  borderRadius: '10px',
  marginBottom: '20px',
  marginTop: '20px',
});

const pokemonShowStyle = css({
  color: '#263238',
});

const DEFAULT_API_CONFIG = {
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
};

const axiosClient = axios.create(DEFAULT_API_CONFIG);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [appearance, setAppeaRance] = useState('');

  const getPokemon = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await axiosClient.get(`/pokemon/${id}`);
      const pokemon = res.data;
      setName(pokemon.forms[0].name);
      setAppeaRance(pokemon.sprites.front_default);
      setIsLoading(false);

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
        <p>Click button to show Pokemon randomly!</p>
      </header>
      <div className={wrapperStyle}>
        {isLoading ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <div className={pokemonShowStyle}>
            <img src={appearance} />
            <p>{name}</p>
          </div>
        )}
      </div>
      <Button color="red" onClick={handleSubmit}>
        Show Pokemon!
      </Button>
    </div>
  );
};

export default App;

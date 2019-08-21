import * as React from 'react';
import {css, keyframes} from 'emotion';
import {Button, Label} from 'semantic-ui-react';
import logo from '../assets/images/logo.svg';
import {typeToColor} from '../utils/type';
import {pokeAPIClient} from '../constants/APIConfig';

const indexPageStyle = css({
  paddingTop: '24px',
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
  height: '15vmin',
  pointerEvents: 'none',
});

const wrapperStyle = css({
  padding: '24px 0 24px 0',
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

const pokemonAppearanceStyle = css({
  width: '200px',
  height: '200px',
});

const pokemonNameStyle = css({
  fontSize: '24px',
});

const RandomlyShowPokemonComponent: React.FC = () => {
  const initialState = {
    name: '',
    appearance: '',
    types: [],
  };
  const [pokemonState, setPokemonState] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPokemon = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await pokeAPIClient.get(`/pokemon/${id}`);
      const fetchedPokemonState = {
        name: res.data.forms[0].name,
        appearance: res.data.sprites.front_default,
        types: res.data.types.map(item => item.type.name),
      };
      setPokemonState(fetchedPokemonState);
      setTimeout(() => setIsLoading(false), 1000);
    } catch (err) {
      throw err;
    }
  };

  const handleSubmit = () => {
    const lastPokemonId = 807;
    const pokemonId = Math.floor(Math.random() * (lastPokemonId + 1));
    fetchPokemon(pokemonId);
  };

  return (
    <div className={indexPageStyle}>
      <header className={headerStyle}>
        <img src={logo} className={logoStyle} alt="logo" />
      </header>
      <div className={wrapperStyle}>
        {isLoading ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <div className={pokemonShowStyle}>
            {pokemonState.appearance ? (
              <img
                src={pokemonState.appearance}
                className={pokemonAppearanceStyle}
                alt={pokemonState.name}
              />
            ) : (
              undefined
            )}
            <p className={pokemonNameStyle}>{pokemonState.name}</p>
            {pokemonState.types.map(type => (
              <Label key={type} color={typeToColor(type)}>
                {type}
              </Label>
            ))}
          </div>
        )}
      </div>
      <Button color="red" onClick={handleSubmit}>
        Show Pokemon!
      </Button>
    </div>
  );
};

export default RandomlyShowPokemonComponent;

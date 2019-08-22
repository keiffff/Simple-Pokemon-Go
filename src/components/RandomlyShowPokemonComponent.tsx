import * as React from 'react';
import {css} from 'emotion';
import {Button, Label} from 'semantic-ui-react';
import {typeToColor} from '../utils/typeToColor';
import {pokeAPIClient} from '../api/config';
import bgGrass from '../assets/images/bg_grass.jpg';
import {HeaderComponent} from './HeaderComponent';

const pageStyle = css({
  paddingTop: '24px',
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
});

const wrapperStyle = css({
  width: '80%',
  maxWidth: 500,
  minWidth: 350,
  margin: '0 auto',
  backgroundImage: `url(${bgGrass})`,
  backgroundSize: 'cover',
  height: 500,
  borderRadius: '10px',
  marginBottom: '20px',
  marginTop: '20px',
  position: 'relative',
});

const loaderStyle = css({
  position: 'absolute',
  top: '50%',
});

const pokemonShowStyle = css({
  color: '#263238',
  paddingTop: 160,
});

const pokemonAppearanceStyle = css({
  width: '200px',
  height: '200px',
});

const pokemonNameStyle = css({
  color: 'white',
  fontSize: '32px',
  fontWeight: 'bold',
});

const RandomlyShowPokemonComponent: React.FC = () => {
  const initialState = {
    name: '',
    appearance: '',
    types: [],
  };
  const [pokemonAttribute, setPokemonAttribute] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const fetchPokemon = async (id: number) => {
    try {
      setIsLoading(true);
      const res = await pokeAPIClient.get(`/pokemon/${id}`);
      const isShiny = Math.random() < 0.01;
      const fetchedPokemonAttribute = {
        name: res.data.forms[0].name,
        appearance: isShiny
          ? res.data.sprites.front_shiny
          : res.data.sprites.front_default,
        types: res.data.types.map(item => item.type.name),
      };
      setPokemonAttribute(fetchedPokemonAttribute);
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
    <div className={pageStyle}>
      <HeaderComponent />
      <div className={wrapperStyle}>
        {isLoading ? (
          <div className={`ui active loader ${loaderStyle}`}></div>
        ) : (
          <div className={pokemonShowStyle}>
            {pokemonAttribute.appearance ? (
              <img
                src={pokemonAttribute.appearance}
                className={pokemonAppearanceStyle}
                alt={pokemonAttribute.name}
              />
            ) : (
              undefined
            )}
            <p className={pokemonNameStyle}>{pokemonAttribute.name}</p>
            {pokemonAttribute.types.map(type => (
              <Label key={type} color={typeToColor(type)}>
                {type}
              </Label>
            ))}
          </div>
        )}
      </div>
      <Button color="red" onClick={handleSubmit}>
        Click to Appear!
      </Button>
    </div>
  );
};

export default RandomlyShowPokemonComponent;

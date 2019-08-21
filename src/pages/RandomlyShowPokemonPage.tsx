import * as React from 'react';
import {css} from 'emotion';
import {Button} from 'semantic-ui-react';
import {pokeAPIClient} from '../configs/APIConfig';
import bgGrass from '../assets/images/bg_grass.jpg';
import {HeaderComponent} from '../components/HeaderComponent';
import {PokemonAbstractComponent} from '../components/PokemonAbstractComponent';

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

const RandomlyShowPokemonPage: React.FC = () => {
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
          <PokemonAbstractComponent {...pokemonAttribute} />
        )}
      </div>
      <Button color="red" onClick={handleSubmit}>
        Click to Appear!
      </Button>
    </div>
  );
};

export default RandomlyShowPokemonPage;

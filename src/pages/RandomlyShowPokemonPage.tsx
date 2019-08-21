import * as React from 'react';
import {css} from 'emotion';
import {Button} from 'semantic-ui-react';
import {pokeAPIClient} from '../configs/APIConfig';
import {HeaderComponent} from '../components/HeaderComponent';
import {PokemonAbstractComponent} from '../components/PokemonAbstractComponent';

const pageStyle = css({
  paddingTop: '24px',
  textAlign: 'center',
  backgroundColor: '#282c34',
  minHeight: '100vh',
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
      const fetchedPokemonAttribute = {
        name: res.data.forms[0].name,
        appearance: res.data.sprites.front_default,
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
          <div className="ui active centered inline loader"></div>
        ) : (
          <PokemonAbstractComponent {...pokemonAttribute} />
        )}
      </div>
      <Button color="red" onClick={handleSubmit}>
        Show Pokemon!
      </Button>
    </div>
  );
};

export default RandomlyShowPokemonPage;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router';

import { RandomlyShowPokemonComponent } from '../components/RandomlyShowPokemonComponent';
import { fetchPokemon } from '../actions/fetchPokemon';
import { Pokemon } from '../api/models/pokemon';
import { State } from '../reducers/fetchPokemon';
import { PROBABILITY_OF_SHINY, LAST_POKEMON_ID } from '../constants/Var';

interface StateProps {
  pokemon?: Pokemon;
  isLoading: boolean;
}

const RandomlyShowPokemonContainer = () => {
  const stateProps: StateProps = useSelector((state: State) => ({
    pokemon: state.pokemon,
    isLoading: state.isLoading,
  }));
  const dispatch: Dispatch = useDispatch();
  const [isShiny, setIsShiny] = React.useState(false);

  const pokemonId = Math.floor(Math.random() * (LAST_POKEMON_ID + 1));
  const appearInShiny = () => {
    if (Math.random() < PROBABILITY_OF_SHINY) {
      setIsShiny(true);
    } else {
      setIsShiny(false);
    }
  };

  const fetchPokemonLoad = React.useCallback(() => {
    dispatch(fetchPokemon.load({ pokemonId }));
    appearInShiny();
  }, [dispatch, pokemonId]);

  return (
    <RandomlyShowPokemonComponent
      pokemon={stateProps.pokemon}
      isLoading={stateProps.isLoading}
      fetchPokemonLoad={fetchPokemonLoad}
      isShiny={isShiny}
    />
  );
};

export default withRouter(RandomlyShowPokemonContainer);

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { withRouter } from 'react-router';

import { RandomlyShowPokemonComponent } from '../components/RandomlyShowPokemonComponent';
import { ActionType } from '../actions/fetchPokemon';
import { Pokemon } from '../api/models/pokemon';
import { State } from '../reducers/fetchPokemon';

interface StateProps {
  pokemon?: Pokemon;
  isLoading: boolean;
}

const RandomlyShowPokemonContainer: React.FC = () => {
  const stateProps: StateProps = useSelector((state: State) => ({
    pokemon: state.pokemon,
    isLoading: state.isLoading,
  }));
  const dispatch: Dispatch = useDispatch();

  const fetchPokemonLoad: () => void = React.useCallback(
    () => dispatch({ type: ActionType.LOAD }),
    [dispatch],
  );

  return (
    <RandomlyShowPokemonComponent
      pokemon={stateProps.pokemon}
      isLoading={stateProps.isLoading}
      fetchPokemonLoad={fetchPokemonLoad}
    />
  );
};

export default withRouter(RandomlyShowPokemonContainer);

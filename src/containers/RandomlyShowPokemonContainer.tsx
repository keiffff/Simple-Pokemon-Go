import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { RandomlyShowPokemonComponent } from '../components/RandomlyShowPokemonComponent';
import { fetchPokemon } from '../actions/fetchPokemon';
import { Pokemon } from '../api/models/pokemon';
import { State } from '../reducers/fetchPokemon';

interface StateProps {
  pokemon?: Pokemon;
  isLoading: boolean;
}

interface DispatchProps {
  fetchPokemonLoad: () => void;
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const mapStateToProps = (state: State): StateProps => ({
  pokemon: state.pokemon,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ fetchPokemonLoad: () => fetchPokemon.load() }, dispatch);

const RandomlyShowPokemonContainer: React.FC<Props> = ({
  pokemon,
  isLoading,
  fetchPokemonLoad,
}) => (
  <RandomlyShowPokemonComponent
    pokemon={pokemon}
    isLoading={isLoading}
    fetchPokemonLoad={fetchPokemonLoad}
  />
);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RandomlyShowPokemonContainer),
);

import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { ActionType, fetchPokemon } from '../actions/fetchPokemon';
import { fetchPokemonById } from '../api/pokeApi';
import { Pokemon } from '../api/models/pokemon';

function* runFetchPokemon() {
  const lastPokemonId = 807;
  const pokemonId = Math.floor(Math.random() * (lastPokemonId + 1));

  try {
    const pokemon: Pokemon = yield call(fetchPokemonById, pokemonId);
    yield put(fetchPokemon.success(pokemon));
  } catch (error) {
    yield put(fetchPokemon.failure(error));
  }
}

export function* watchFetchPokemon() {
  yield takeLatest(ActionType.LOAD, runFetchPokemon);
}

export function* rootSaga() {
  yield all([fork(watchFetchPokemon)]);
}

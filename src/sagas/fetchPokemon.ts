import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import { ActionType, fetchPokemon } from '../actions/fetchPokemon';
import { fetchPokemonById } from '../api/pokeApi';
import { Pokemon } from '../api/models/pokemon';

function* runFetchPokemon(action: ReturnType<typeof fetchPokemon.load>) {
  const { pokemonId } = action.payload.params;

  try {
    const pokemon: Pokemon = yield call(fetchPokemonById, pokemonId);
    yield put(fetchPokemon.success({ pokemonId }, pokemon));
  } catch (error) {
    yield put(fetchPokemon.failure({ pokemonId }, error));
  }
}

export function* watchFetchPokemon() {
  yield takeLatest(ActionType.LOAD, runFetchPokemon);
}

export function* rootSaga() {
  yield all([fork(watchFetchPokemon)]);
}

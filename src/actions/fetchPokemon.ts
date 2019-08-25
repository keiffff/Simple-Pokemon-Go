import { AxiosError } from 'axios';

import { Pokemon } from '../api/models/pokemon';
import { CreatorsToActions } from '../utils/creatorsToActions';

export enum ActionType {
  LOAD = 'FETCHPOKEMON/LOAD',
  SUCCESS = 'FETCHPOKEMON/SUCCESS',
  FAILURE = 'FETCHPOKEMON/FAILURE',
}

interface FetchPokemonParams {
  pokemonId: number;
}

export const fetchPokemon = {
  load: (params: FetchPokemonParams) => ({
    type: ActionType.LOAD as typeof ActionType.LOAD,
    payload: { params },
  }),

  success: (params: FetchPokemonParams, item: Pokemon) => ({
    type: ActionType.SUCCESS as typeof ActionType.SUCCESS,
    payload: { params, item },
  }),

  failure: (params: FetchPokemonParams, error: AxiosError) => ({
    type: ActionType.FAILURE as typeof ActionType.FAILURE,
    payload: { params, error },
    error: true,
  }),
};

export type FetchPokemonAction = CreatorsToActions<typeof fetchPokemon>;

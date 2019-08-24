import { AxiosError } from 'axios';

import { Pokemon } from '../api/models/pokemon';
import { CreatorsToActions } from '../utils/creatorsToActions';

export enum ActionType {
  LOAD = 'FETCHPOKEMON/LOAD',
  SUCCESS = 'FETCHPOKEMON/SUCCESS',
  FAILURE = 'FETCHPOKEMON/FAILURE',
}

export const fetchPokemon = {
  load: () => ({
    type: ActionType.LOAD as typeof ActionType.LOAD,
  }),

  success: (item: Pokemon) => ({
    type: ActionType.SUCCESS as typeof ActionType.SUCCESS,
    payload: { item },
  }),

  failure: (error: AxiosError) => ({
    type: ActionType.FAILURE as typeof ActionType.FAILURE,
    payload: { error },
    error: true,
  }),
};

export type FetchPokemonAction = CreatorsToActions<typeof fetchPokemon>;

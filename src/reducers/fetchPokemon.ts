import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { Pokemon } from '../api/models/pokemon';
import {
  FetchPokemonAction as Action,
  ActionType,
} from '../actions/fetchPokemon';

export interface State {
  pokemon?: Pokemon;
  isLoading: boolean;
  error?: AxiosError;
}

export const initialState: State = {
  pokemon: undefined,
  isLoading: false,
};

const fetchPokemonReducer: Reducer<State, Action> = (
  state: State = initialState,
  action: Action,
): State => {
  switch (action.type) {
    case ActionType.LOAD:
      return { ...state, pokemon: undefined, isLoading: true };
    case ActionType.SUCCESS:
      return { ...state, pokemon: action.payload.item, isLoading: false };
    case ActionType.FAILURE:
      return {
        ...state,
        pokemon: undefined,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default fetchPokemonReducer;

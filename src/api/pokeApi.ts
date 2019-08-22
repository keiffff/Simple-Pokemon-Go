import axios from 'axios';
import { Pokemon } from './models/pokemon';

const POKEAPI_DEFAULT_CONFIG = {
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
};

export const pokeApiClient = axios.create(POKEAPI_DEFAULT_CONFIG);

export const fetchPokemonById = async (id: number) => {
  try {
    const response = await pokeApiClient.get(`/pokemon/${id}`);
    const pokemon: Pokemon = response.data;

    return pokemon;
  } catch (error) {
    throw error;
  }
};

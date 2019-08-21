import axios from 'axios';

const DEFAULT_API_CONFIG = {
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
};

export const pokeAPIClient = axios.create(DEFAULT_API_CONFIG);

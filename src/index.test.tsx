import React from 'react';
import ReactDOM from 'react-dom';
import RandomlyShowPokemonPage from './pages/RandomlyShowPokemonPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandomlyShowPokemonPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

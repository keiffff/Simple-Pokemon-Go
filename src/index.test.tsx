import React from 'react';
import ReactDOM from 'react-dom';
import RandomlyShowPokemonComponent from './components/RandomlyShowPokemonComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandomlyShowPokemonComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

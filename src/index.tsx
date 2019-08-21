import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import RandomlyShowPokemonComponent from './components/RandomlyShowPokemonComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <RandomlyShowPokemonComponent />,
  document.getElementById('root')
);
serviceWorker.unregister();

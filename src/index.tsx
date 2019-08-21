import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import RandomlyShowPokemonPage from './pages/RandomlyShowPokemonPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RandomlyShowPokemonPage />, document.getElementById('root'));
serviceWorker.unregister();

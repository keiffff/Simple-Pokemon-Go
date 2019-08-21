import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router';
import './index.css';
import RandomlyShowPokemonPage from './pages/RandomlyShowPokemonPage';
import * as serviceWorker from './serviceWorker';

const Page: React.FC = () => (
  <Switch>
    <Route path="/" component={RandomlyShowPokemonPage} />
    <Redirect to="/" />
  </Switch>
);

ReactDOM.render(
  <BrowserRouter>
    <Page />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();

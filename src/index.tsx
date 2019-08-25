import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import './index.css';
import RandomlyShowPokemonContainer from './containers/RandomlyShowPokemonContainer';
import ShowPokemonDetailComponent from './components/ShowPokemonDetailComponent';
import reducer from './reducers/fetchPokemon';
import { rootSaga } from './sagas/fetchPokemon';

const sagaMiddlaware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddlaware));

const Page: React.FC = () => (
  <Switch>
    <Route exact path="/" component={RandomlyShowPokemonContainer} />
    <Route exact path="/pokemon/:id" component={ShowPokemonDetailComponent} />
    <Redirect to="/" />
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

sagaMiddlaware.run(rootSaga);

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { makeGuess, feedback, winner } from './actions/actions';

import './reset.css';
import './index.css';

import Game from './components/game';

store.dispatch(makeGuess(3));
store.dispatch(makeGuess(4));
store.dispatch(feedback('Hot!'))
console.log(store.getState())

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

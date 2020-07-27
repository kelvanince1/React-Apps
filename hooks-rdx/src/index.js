import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT_COUNT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

const INITIAL_STATE = {
  count: 0
};

const store = createStore(reducer, INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

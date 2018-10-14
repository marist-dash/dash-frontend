import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  username: '',
  password: '',
  requestSent: false,
  responseReceived: false,
  student: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case "REQUEST_SENT":
      return {
        requestSent: true
      };

    case "RESPONSE_RECEIVED":
      return {
        responseReceived: true
      };

    case "USERNAME":
      return Object.assign({}, state, {
        username: action.username
      });

    case "PASSWORD":
      return Object.assign({}, state, {
        password: action.password
      });

    default:
      return state;
  }

}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

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
  errorMessage: ''
};

function reducer(state = initialState, action) {

  switch (action.type) {

    case "REQUEST_SENT":
      return Object.assign({}, state, {
        requestSent: action.value
      });

    case "USERNAME":
      return Object.assign({}, state, {
        username: action.username
      });

    case "PASSWORD":
      return Object.assign({}, state, {
        password: action.password
      });

    case "ERROR_MESSAGE":
      return Object.assign({}, state, {
        errorMessage: action.errorMessage
      });

    case "STUDENT":
      return Object.assign({}, state, {
        student: action.student
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

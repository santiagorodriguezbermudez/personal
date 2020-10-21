import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import combinedReducers from './reducers/index';
import './assets/main.css';
import './assets/home.css';
import initialProjects from './constants/constants';

const initialState = initialProjects;

const store = createStore(combinedReducers, {
  projects: initialState,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

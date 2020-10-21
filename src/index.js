import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import combinedReducers from './reducers/index';
import './assets/main.css';
import './assets/home.css';
import { fetchProjectsAsync } from './actions/index';

// const initialState = initialProjects;

const store = createStore(combinedReducers, {
  projects: [],
}, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('state updated', store.getState());
});

store.dispatch(fetchProjectsAsync());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

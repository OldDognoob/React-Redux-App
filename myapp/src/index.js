import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {pokemonReducer, spinnerReducer} from './state/reducers'

//STEP-4 USE combineReducers FROM REDUX TO MAKE A SINGLE REDUCER
const combinedReducer = combineReducers({
    pokemon: pokemonReducer,
    spinnerOn: spinnerReducer,
})

//STEP-5 USE createStore FROM REDUX TO MAKE A STATE STORE
const store = createStore(
    combinedReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
    //STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM REACT-REDUX
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

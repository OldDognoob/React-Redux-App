import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { jokeReducer} from "./state/reducers";
import * as serviceWorker from "./serviceWorker";

//STEP 4 COMBINE REDUCERS TO MAKE A MONSTER REDUCER
const combinedReducer = combineReducers({
    joke: jokeReducer,
    
  });
  
  // STEP-5 USE createStore FROM redux TO MAKE A STATE STORE
  const store = createStore(
    combinedReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );


  // const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
    // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM react-redux
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
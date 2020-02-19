import * as types from './actionTypes'
import axios from 'axios';

export const FETCH_JOKE_START = 'FETCH_JOKE_START';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export const fetchJoke = () => dispatch => {
    dispatch({ type: types.FETCH_JOKE_START });
    // fetch joke
    axios
      .get('//api.icndb.com/jokes/random?exclude=[explicit]')
      .then(res => {
        dispatch({ type: types.FETCH_JOKE_SUCCESS, payload: res.data.value.joke });
      })
      .catch(error =>{
        dispatch({type: types.FETCH_JOKE_FAILURE, payload: error.response})
      })
  };
  


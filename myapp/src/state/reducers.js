import * as types from './actionTypes'

//STEP-1 DESIGN APPLICATION STATE

const initialState = {
  error: '',
  isFetching: false,
  joke: ''
  };

//STEP 3 CREATE ONE REDUCER FUNCTION FOR EACH SLICE OF STATE.
  export const jokeReducer= (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_JOKE_START:
        return {
          ...state,
          error: '',
          isFetching: true,
          joke: ''
        };
      case types.FETCH_JOKE_SUCCESS:
        return {
          ...state,
          error: '',
          isFetching: false,
          joke: action.payload
        };
      default:
        return state;
    }
  };
 
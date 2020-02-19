import * as types from './actionTypes'

// STEP-1 DESIGN APPLICATION STATE

const initialState = {
    pokemon:[],
    isFetching: false,
}, 
spinnerON: false,

//STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE
const initialStateForm = {pokemon: [], isFetching:false}
export function pokemonReducer(state=initialStateForm, action){
    switch(action.type){
        case types.GET_POKEMON_START:
            return{
                ...state,
                pokemon:action.payload,
                isFetching: true
            }
        case types.GET_POKEMON_SUCCESS:
            return{
                ...state,
                pokemon:action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

const initialStateSpinner = false;
export function spinnerReducer(state=initialStateSpinner, actions){
    switch(action.type){
        case types.SPINNER_START:
            return true;
        case types.SPINNER_STOP:
            return initialStateSpinner;
            default:
                return state;
    }
}
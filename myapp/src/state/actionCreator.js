import * as types from './actionTypes'
import axios from 'axios'

const pokemonAPI= 'https://pokeapi.co/api/v2/pokemon/'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export const getPokemons = () => dispatch =>{
    dispatch({type: types.GET_POKEMON_START})
    dispatch({type: types.SPINNER_START})
        axios.get(pokemonAPI)
        .then(response => {
            console.log(response)
            dispatch({type: types.SET_POKEMON_START, payload:response.data.results})
        })
        .catch(error =>{
            debugger
        })
        .finally(() =>{
            dispatch({type: types.SPINNER_STOP})
        })
    }  
    
export const getPokemons = () => dispatch=>{
    dispatch({type: types.GET_POKEMON_SUCCESS})
    dispatch({type: types.SPINNER_START})
    axios.get(pokemonAPI)
    .then(response =>{
        console.log(response)
        dispatch({type: types.SET_POKEMON_SUCCESS, payload:response.data.results})
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(() =>{
        dispatch({type: types.SPINNER_STOP})
   })

}



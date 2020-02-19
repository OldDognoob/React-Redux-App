import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreator";


import Jokes from './components/Jokes';

function App({spinnerOn, fetchJoke}) {
  useEffect(() =>{
    fetchJoke();
  },[]);

  if(spinnerOn){
    return(
      <div className="Engage"></div>
    );
  }
  return (
    <div className="App">
      <h1>Jokes 😂</h1>
      <Jokes />
    </div>
  );
}

function mapStateToProps(state){
  return{
    jokes:state.joke,
    spinnerOn:state.spinnerOn
  };
}
// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
export default connect(
  mapStateToProps, 
  actionCreators)// STEP-9 BRING IN THE ACTION CREATORS
  (App);





















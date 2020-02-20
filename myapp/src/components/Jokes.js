import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchJoke } from '../state/actionCreator';

function Jokes(props){
    return(
        <div>
            <button onClick={props.fetchJoke}>Fetch me some Laughs!</button>
            {!props.joke && !props.isFetching && <p>Fetch a joke for some giggles!</p>}
            {props.isFetching && (
                <Loader 
                type="Puff"
                color="#89a0de"
                height={100}
                width={100}
                />
            )}
          <h2>
            {props.joke}
          </h2>
        </div>
    );
}



  const mapStateToProps = state => {
    console.log(state);
    return {
      error: state.joke.error,
      isFetching: state.joke.isFetching,
      joke: state.joke.joke
    };
  };
  export default connect(
    mapStateToProps,
    { fetchJoke }
  )(Jokes);



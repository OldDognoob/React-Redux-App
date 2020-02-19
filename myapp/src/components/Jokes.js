import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchJoke } from '../state/actionCreator';

function Jokes(props){
    return(
        <div>
            <button onClick={props.fetchJoke}>Fetch me some Laughs!</button>
            {!props.joke && !props.propsIsFetching && <p>Fetch a joke for some giggles!</p>}
            {props.IsFetching && (
                <Loader 
                type="puff"
                color="#89a0de"
                height="100"
                width="100"
                />
            )}
            {/* <div>
                {props.fetchJoke && !props.propsIsFetching}
            </div> */}
        </div>
    );
}



  const mapStateToProps = state => {
    console.log(state);
    return {
      error: state.error,
      isFetching: state.isFetching,
      joke: state.joke
    };
  };
  export default connect(
    mapStateToProps,
    { fetchJoke }
  )(Jokes);



import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const result_reducer = (state = initialState, action) => {
  console.log('result_reducer', state);
  
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return { ...state, results: state.results.concat(action.result) }; // concat takes a copy of results and returns a new array ie, maintains immutability
    case actionTypes.DELETE_RESULT: {
      let z = [...state.results]; // maintain state.results as immutable by copying to z
      z.splice(action.value, 1);  // remove the item in the array being deleted
      return { ...state, results: z }; // shallow copy the state and include the udpated array (results) - all as a single operation
    }
  }

  return state;
};

export default result_reducer;

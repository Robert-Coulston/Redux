import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case actionTypes.ADD:
      return { ...state, counter: state.counter + action.value };
    case actionTypes.SUBTRACT:
      return { ...state, counter: state.counter - action.value };
    case actionTypes.STORE_RESULT:
      return { ...state, results: state.results.concat(state.counter) }; // concat takes a copy of results and returns a new array ie, maintains immutability
    case actionTypes.DELETE_RESULT: {
      let z = [...state.results]; // maintain state.results as immutable by copying to z
      z.splice(action.value, 1);  // remove the item in the array being deleted
      return { ...state, results: z }; // shallow copy the state and include the udpated array (results) - all as a single operation
    }
  }

  return state;
};

export default reducer;

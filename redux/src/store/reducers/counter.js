import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case actionTypes.SUBTRACT:
      // This produces the result as the ADD case above. It is simply using a utility function to handle the workload.
      return updateObject(state, {counter: state.counter - action.payload});
    default:
      return state;
  }
}

export default reducer;

import * as actionTypes from './actionTypes';

export const saveResult = (payload) => {
  return {
    type: actionTypes.STORE_RESULT,
    payload: payload
  }
}

export const storeResult = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(payload))
    }, 2000);
  };

  return {
    type: actionTypes.STORE_RESULT,
    payload: payload
  };
};

export const deleteResult = (payload) => {
  return {
    type: actionTypes.DELETE_RESULT,
    payload: payload
  };
};

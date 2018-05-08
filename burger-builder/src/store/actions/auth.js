import axios from 'axios';

import * as actionTypes from './actionTypes';
import { SIGN_UP, SIGN_IN } from './axiosUrl';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    let url = SIGN_UP;
    if (!isSignUp) {
      url = SIGN_IN
    }
    axios.post(url, authData)
      .then(res => {
        console.log(res);
        dispatch(authSuccess(res.data))
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail(err));
      })
  };
};

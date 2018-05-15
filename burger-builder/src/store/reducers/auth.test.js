import React from 'react';

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth reducer', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    });
  });

  it('Should store the token after auth', () => {
    expect(reducer({
        token: null,
        userId: null,
        error: null,
        loading: false,
        authRedirectPath: '/'
    }, {type: actionTypes.AUTH_SUCCESS, idToken: 'someToken', userId: 'UserId'})).toEqual({
        token: 'someToken',
        userId: 'UserId',
        error: null,
        loading: false,
        authRedirectPath: '/'
    });
  })
});

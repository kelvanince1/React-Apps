import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS
} from './constants';

const mockStore = configureMockStore([thunkMiddleware]);

it('Should create an action to search robots', () => {
    const text = 'Wow!';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('Handles request to robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }

    expect(action[0]).toEqual(expectedAction);
});
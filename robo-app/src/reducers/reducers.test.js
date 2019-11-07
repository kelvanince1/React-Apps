import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_SUCCESS
} from '../actions/constants';

import * as reducers from './reducers';

describe('Search Robots', () => {
    const initialStateSearch = {
        searchField: ''
    }

    it('Should return the initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    });

    it('Handles updates to search field', () => {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    });
});

describe('Request Robots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false,
        error: ''
    }

    it('Should return the initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('Should handle pending action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true,
            error: ''
        });
    });

    it('Should handle pending success', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }]
        })).toEqual({
            robots: [{
                id: '123',
                name: 'test',
                email: 'test@gmail.com'
            }],
            isPending: false,
            error: ''
        });
    });

    it('Should handle failed action', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'NOPE!'
        })).toEqual({
            error: 'NOPE!',
            isPending: false,
            robots: []
        });
    });
});
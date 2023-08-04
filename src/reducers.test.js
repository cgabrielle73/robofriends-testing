import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers'

describe('search robots', () => {
    const initialStateMock = {
        searchField: ''
    }
    it('should return initial state', () => {
        expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' })
    })
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchRobots(initialStateMock, {
            type: CHANGE_SEARCHFIELD,
            payload: 'aaa'
        })).toEqual({ searchField: 'aaa' })
    })
})

describe('requestRobots', () => {
    const initialStateRobots = {
        robots: [],
        isPending: false
    }
    it('should return initial state', () => {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })
    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING,
        })).toEqual({
            robots: [],
            isPending: true
        })
    })
    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
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
            isPending: false
        })
    })
    it('should handle REQUEST_ROBOTS_ERROR', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAILED,
            payload: "NOOOO"
        })).toEqual({
            error: "NOOOO",
            robots: [],
            isPending: false
        })
    })
})

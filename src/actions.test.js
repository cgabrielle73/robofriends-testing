import * as actions from './actions'
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'

import configureStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureStore([thunkMiddleware])

describe('setSearchField', () => {
    it('empty search field', () => {
        expect(actions.setSearchField('')).not.toEqual({
            type: CHANGE_SEARCHFIELD,
            payload: undefined
        })
    })
    it('search field with text', () => {
        expect(actions.setSearchField('AAA')).toEqual({
            type: CHANGE_SEARCHFIELD,
            payload: 'AAA'
        })
    })
})

describe('requestRobots', () => {
    it('handle requesting robots api', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();

        expect(action[0]).toEqual({
            type: REQUEST_ROBOTS_PENDING,
        })
    })
})

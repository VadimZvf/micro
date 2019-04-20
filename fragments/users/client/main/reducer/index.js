import * as types from '../constants/action-types';
import createReducer from '../../utilities/create-reducer';

const initialState = {
    isPending: false,
    users: []
};

const actions = {
    [types.FETCH_USERS_REQUEST]: state => ({ ...state, isPending: true }),

    [types.FETCH_USERS_SUCCESS]: (state, { payload }) => ({
        ...state,
        users: payload,
        isPending: false
    }),

    [types.FETCH_USERS_FAILURE]: state => ({ ...state, isPending: false }),

    [types.HANDLE_EVENT]: (state, { payload }) => ({
        ...state,
        users: [...state.users, { id: payload, name: payload }]
    })
};

export default createReducer(initialState, actions);

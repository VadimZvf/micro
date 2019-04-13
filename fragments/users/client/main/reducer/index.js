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

    [types.FETCH_USERS_FAILURE]: state => ({ ...state, isPending: false })
};

export default createReducer(initialState, actions);

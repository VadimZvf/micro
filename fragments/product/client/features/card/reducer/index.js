import * as types from '../constants/action-types';
import createReducer from '../../../utilities/create-reducer';

const initialState = {
    isPending: false,
    product: null
};

const actions = {
    [types.FETCH_PRODUCT_REQUEST]: state => ({ ...state, isPending: true }),

    [types.FETCH_PRODUCT_SUCCESS]: (state, { payload }) => ({
        ...state,
        product: payload,
        isPending: false
    }),

    [types.FETCH_PRODUCT_FAILURE]: state => ({ ...state, isPending: false })
};

export default createReducer(initialState, actions);

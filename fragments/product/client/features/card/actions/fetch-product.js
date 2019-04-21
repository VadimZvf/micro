import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../constants/action-types';
import api from '../services/api';

export default (params = {}) => async (dispatch, getState) => {
    const product = getState().card.product;

    // don't fetch users if it already exist
    if (!product) {
        try {
            dispatch({ type: FETCH_PRODUCT_REQUEST });
            const { data } = await api.fetchProduct(params.id);

            dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
        } catch (e) {
            dispatch({ type: FETCH_PRODUCT_FAILURE });
        }
    }
};

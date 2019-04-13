import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from '../constants/action-types';
import api from '../services/api';

export default () => async (dispatch, getState) => {
    const users = getState().main.users;

    // don't fetch users if it already exist
    if (!users.length) {
        try {
            dispatch({ type: FETCH_USERS_REQUEST });

            const { data } = await api.fetchUsers();

            dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
        } catch (e) {
            dispatch({ type: FETCH_USERS_FAILURE });
        }
    }
};

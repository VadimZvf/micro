import { HANDLE_EVENT } from '../constants/action-types';

const eventType = 'FIRST_EVENT';

export default () => async dispatch => {
    if (typeof window !== 'undefined') {
        window.__EVENT_BUS__.subscribe(eventType, message => {
            dispatch({ type: HANDLE_EVENT, payload: message });
        });
    }
};

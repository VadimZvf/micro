import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

let composeEnhancers = compose;
let initState;

// if browser runtime
if (typeof window !== 'undefined') {
    initState = window.__USERS_STATE__;
    delete window.__USERS_STATE__;

    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
}

const store = createStore(reducer, initState, composeEnhancers(applyMiddleware(thunk)));

export default store;

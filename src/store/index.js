
import reducer from './reducer';
import * as action from './action';
import * as constants from './constants';
import { createStore, compose, applyMiddleware } from "redux";

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export {
    store,
    action,
    constants
}
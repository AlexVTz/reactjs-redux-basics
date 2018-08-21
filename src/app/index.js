import React from "react";
import {render} from "react-dom";
import App from './containers/App'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux'

const mathObject = {
    result: 1,
    some: []
}

const userObject = {
    name: "Alejandro",
    age: 23
}

const logger = createLogger({
    // ...options
  });

const mathReducer = (state = mathObject, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                some: [...state.some, action.payload]
            };
            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result: state.result + action.payload,
                some: [...state.some, action.payload]
            };
            break;
    }
    return state;
}

const userReducer = (state = userObject, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
}

const myLogger = (store) => (next) => (action) => {
    console.log('This is a middleware excecution ', action);
    next(action);
}

const store = createStore(combineReducers({mathReducer, userReducer}), {}, 
    applyMiddleware(myLogger, logger));

store.subscribe(() => {
    /* console.log(store.getState()); */
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);
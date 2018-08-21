import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer'; 

const logger = createLogger({
    // ...options
  });

const store = 
  createStore(combineReducers({mathReducer, userReducer}), 
  {}, 
  applyMiddleware(logger));

export default store;

import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export const configureStore = createStore(rootReducer, applyMiddleware(thunk));

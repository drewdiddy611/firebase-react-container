import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './auth';

export default combineReducers({
  auth: authReducer,
  routing: routerReducer
});

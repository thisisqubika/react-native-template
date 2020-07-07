import { combineReducers } from 'redux';
import error from './ErrorReducer';
import status from './StatusReducer';
import user from './UserReducer';

export default combineReducers({ error, status, user });

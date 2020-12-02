import { combineReducers } from 'redux';
import error from '_reducers/ErrorReducer';
import status from '_reducers/StatusReducer';
import user from '_reducers/UserReducer';

export default combineReducers({ error, status, user });

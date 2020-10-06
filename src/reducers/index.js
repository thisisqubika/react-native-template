import { combineReducers } from 'redux';
import error from 'reducers/ErrorReducer';
import status from 'reducers/StatusReducer';
import user from 'reducers/UserReducer';

export default combineReducers({ error, status, user });

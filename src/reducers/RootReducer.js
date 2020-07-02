import { combineReducers } from 'redux';
import error from './ErrorReducer';
import status from './StatusReducer';
import user from './UserReducer';

const rootReducer = combineReducers({ error, status, user });

export default rootReducer;

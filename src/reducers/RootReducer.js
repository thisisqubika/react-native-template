import { combineReducers } from 'redux';
import error from './ErrorReducer';
import user from './UserReducer';
import status from './StatusReducer';

const rootReducer = combineReducers({
  error,
  user,
  status,
});

export default rootReducer;

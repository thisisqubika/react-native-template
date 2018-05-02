import { combineReducers } from 'redux';
import loading from './LoadingReducer';
import error from './ErrorReducer';
import user from './UserReducer';

const rootReducer = combineReducers({
  loading,
  error,
  user,
});

export default rootReducer;

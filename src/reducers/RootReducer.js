import { combineReducers } from 'redux';
import user from './UserReducer';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;

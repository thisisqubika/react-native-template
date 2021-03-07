import { combineReducers } from 'redux';
import { errorReducer } from '_reducers/ErrorReducer';
import { statusReducer } from '_reducers/StatusReducer';
import { userReducer } from '_reducers/UserReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
});

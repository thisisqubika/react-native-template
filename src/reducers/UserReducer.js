import Status from '../helpers/Status';
import { actionTypes } from '../actions/UserActions';

const initialState = {
  user: null,
  loginStatus: Status.NOT_STARTED,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginStatus: Status.LOADING,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        loginStatus: Status.LOADING_ERROR,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        loginStatus: Status.SUCCESS,
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;

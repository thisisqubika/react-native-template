import { actionTypes } from 'actions/UserActions';

const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, ...payload.user };
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;

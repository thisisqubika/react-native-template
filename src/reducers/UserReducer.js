import { TYPES } from '_actions/UserActions';

const userReducer = (state = {}, { payload, type }) => {
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...state, ...payload.user };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

export default userReducer;

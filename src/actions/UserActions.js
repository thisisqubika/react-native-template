import UserController from '../controllers/UserController';

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: null,
});

const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  payload: { error },
});

const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { user },
});

const logoutRequest = () => ({
  type: actionTypes.LOGOUT,
  payload: null,
});

export const login = (email, password) => async dispatch => {
  dispatch(loginRequest());
  try {
    const user = await UserController.login(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => dispatch => {
  UserController.logout();
  dispatch(logoutRequest());
};

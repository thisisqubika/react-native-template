import UserController from 'controllers/UserController';

export const actionTypes = {
  CLEAR_STORE: 'CLEAR_STORE',
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
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

const clearStore = () => ({
  type: actionTypes.CLEAR_STORE,
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

export const logout = () => async dispatch => {
  try {
    await UserController.logout();
  } finally {
    dispatch(clearStore());
  }
};

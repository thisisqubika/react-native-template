export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
};

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginError = error => ({
  type: actionTypes.LOGIN_ERROR,
  error,
});

const loginSuccess = user => ({
  type: actionTypes.LOGIN_SUCCESS,
  user,
});

const logoutRequest = () => ({
  type: actionTypes.LOGOUT,
});

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  /*
    The timeout is there just to simulate some kind of delay.
    The rest of the code is just there to simulate some kind of api call.
  */
  if (email !== 'a@a.com' && password !== '') {
    setTimeout(
      () => dispatch(loginSuccess({ name: 'Jorge' })),
      1000,
    );
  } else {
    setTimeout(
      () => dispatch(loginError('Invalid Email/Password')),
      1000,
    );
  }
};

export const logout = () => dispatch => dispatch(logoutRequest());

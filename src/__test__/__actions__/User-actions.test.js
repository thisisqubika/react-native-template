import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as userActions from 'actions/UserActions';

describe('UserActions', () => {
  const credentials = { email: 'user@test.com', password: 'password' };
  const user = { name: 'Jorge' };
  const store = configureStore([thunk])(user);

  afterEach(() => {
    store.clearActions();
  });

  it('should create an action for login', () => {
    const expectedAction = {
      type: userActions.actionTypes.LOGIN_REQUEST,
      payload: null,
    };

    store.dispatch(userActions.login(credentials.email, credentials.password));

    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });

  it('should create an action for logout', () => {
    const expectedAction = {
      type: userActions.actionTypes.LOGOUT,
      payload: null,
    };

    store.dispatch(userActions.logout());

    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });
});

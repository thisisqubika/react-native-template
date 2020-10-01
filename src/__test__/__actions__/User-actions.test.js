import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as userActions from 'actions/UserActions';

const user = {
  email: 'user@test.com',
  password: 'password',
};

const loginActions = [
  {
    type: userActions.actionTypes.LOGIN_REQUEST,
    payload: null,
  },
  {
    type: userActions.actionTypes.LOGIN_SUCCESS,
    payload: { user: { name: 'Jorge' } },
  },
];

const logoutActions = [
  {
    type: userActions.actionTypes.CLEAR_STORE,
    payload: null,
  },
];

describe('UserActions', () => {
  const mockStore = configureStore([thunk]);

  it('should create an action for login', async () => {
    const store = mockStore({});

    await store.dispatch(userActions.login(user.email, user.password));
    const actions = store.getActions();
    expect(actions).toEqual(loginActions);
  });

  it('should create an action for logout', async () => {
    const store = mockStore({});

    await store.dispatch(userActions.logout());
    const actions = store.getActions();
    expect(actions).toEqual(logoutActions);
  });
});

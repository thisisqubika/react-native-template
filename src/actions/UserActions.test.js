import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, TYPES } from '@/actions/UserActions';

const user = {
  username: 'username',
  password: 'password',
};

const loginActions = [
  {
    type: TYPES.LOGIN_REQUEST,
    payload: null,
  },
  {
    type: TYPES.LOGIN_SUCCESS,
    payload: {
      user: {
        username: 'username',
      },
    },
  },
];

const logoutActions = [
  {
    type: TYPES.CLEAR_STORE,
    payload: null,
  },
];

describe('UserActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for login', async () => {
    await store.dispatch(login(user.username, user.password));
    const actions = store.getActions();
    expect(actions).toEqual(loginActions);
  });

  it('should create an action for logout', async () => {
    await store.dispatch(logout());
    const actions = store.getActions();
    expect(actions).toEqual(logoutActions);
  });
});

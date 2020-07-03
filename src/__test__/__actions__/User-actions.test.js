import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as userActions from '../../actions/UserActions';

const mockStore = configureStore([thunk]);
const user = { name: 'Jorge' };
const credentials = { email: 'user@test.com', password: 'password' };

describe('UserActions', () => {
  const store = mockStore(user);

  afterEach(() => {
    store.clearActions();
  });

  it('should create an action for login', () => {
    const expectedAction = { type: userActions.actionTypes.LOGIN_REQUEST };

    store.dispatch(userActions.login(credentials.email, credentials.password));

    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });

  it('should create an action for logout', () => {
    const expectedAction = { type: userActions.actionTypes.LOGOUT };

    store.dispatch(userActions.logout());

    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });
});

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, TYPES } from '@/actions/UserActions';
import { strings } from '@/localization';
import { mockLoginNetworkService, mockLogoutNetworkService } from '@/mocks';

describe('UserActions', () => {
  describe('login', () => {
    it('should dispatch LOGIN_REQUEST and LOGIN_SUCCESS actions with valid credentials', async () => {
      const loginSuccessActions = [
        {
          type: TYPES.LOGIN_REQUEST,
          payload: null,
        },
        {
          type: TYPES.LOGIN_SUCCESS,
          payload: {
            user: {
              id: 1,
              accessToken: '8973272932932eT32e',
              username: 'username',
            },
          },
        },
      ];

      const mockStore = configureStore([
        thunk.withExtraArgument({ networkService: mockLoginNetworkService, demoMode: false }),
      ]);
      const store = mockStore({});
      await store.dispatch(login('username', 'password'));
      const actions = store.getActions();

      expect(actions).toEqual(loginSuccessActions);
    });

    it('should dispatch LOGIN_REQUEST and LOGIN_ERROR actions with invalid credentials', async () => {
      const loginErrorActions = [
        {
          type: TYPES.LOGIN_REQUEST,
          payload: null,
        },
        {
          type: TYPES.LOGIN_ERROR,
          payload: {
            error: strings.login.invalidCredentials,
          },
        },
      ];

      const mockStore = configureStore([
        thunk.withExtraArgument({ networkService: mockLoginNetworkService, demoMode: false }),
      ]);
      const store = mockStore({});
      await store.dispatch(login('username', 'invalidPassword'));
      const actions = store.getActions();

      expect(actions).toEqual(loginErrorActions);
    });
  });

  describe('logout', () => {
    it('should always dispatch a CLEAR_STORE action', async () => {
      const logoutSuccessActions = [
        {
          type: TYPES.CLEAR_STORE,
          payload: null,
        },
      ];

      const mockStore = configureStore([
        thunk.withExtraArgument({ networkService: mockLogoutNetworkService, demoMode: false }),
      ]);
      const store = mockStore({});
      await store.dispatch(logout());
      const actions = store.getActions();

      expect(actions).toEqual(logoutSuccessActions);
    });
  });
});

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { globalReset, TYPES } from '@/actions/GlobalActions';

describe('GlobalActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for the global reset', () => {
    const globalResetAction = [
      {
        type: TYPES.GLOBAL_RESET,
        payload: null,
      },
    ];

    store.dispatch(globalReset());
    const actions = store.getActions();

    expect(actions).toEqual(globalResetAction);
  });
});

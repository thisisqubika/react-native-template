import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { globalReset, TYPES } from '@/actions/GlobalActions';

const globalActions = [
  {
    type: TYPES.GLOBAL_RESET,
    payload: null,
  },
];

describe('GlobalActions', () => {
  let store;
  let mockStore;

  beforeEach(() => {
    mockStore = configureStore([thunk]);
    store = mockStore({});
  });

  it('should create an action for the global reset', () => {
    store.dispatch(globalReset());
    const actions = store.getActions();
    expect(actions).toEqual(globalActions);
  });
});

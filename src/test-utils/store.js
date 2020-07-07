import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const initialStore = { error: {}, status: {}, user: {} };

export default function configureStore(initialState = initialStore) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

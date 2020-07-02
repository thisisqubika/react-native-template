import { actionTypes } from 'actions/GlobalActions';

const errorReducer = (state = {}, { type, error }) => {
  const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

  if (matches) {
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === 'ERROR' ? error : null,
    };
  }

  if (type === actionTypes.GLOBAL_RESET) return {};

  const matchesReset = /(.*)_RESET/.exec(type);

  if (!matchesReset) return state;

  const [, requestName] = matchesReset;
  const newState = { ...state };
  delete newState[requestName];
  return newState;
};

export default errorReducer;

import { actionTypes } from 'actions/GlobalActions';

const errorReducer = (state = {}, { payload, type }) => {
  if (type === actionTypes.GLOBAL_RESET) {
    return {};
  }

  const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

  if (matches) {
    const [, requestName, requestState] = matches;
    return {
      ...state,
      [requestName]: requestState === 'ERROR' ? payload.error : null,
    };
  }

  const matchesReset = /(.*)_RESET/.exec(type);

  if (matchesReset) {
    const [, requestName] = matchesReset;
    const newState = { ...state };
    delete newState[requestName];
    return newState;
  }

  return state;
};

export default errorReducer;

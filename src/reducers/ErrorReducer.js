import { TYPES } from '@/actions/GlobalActions';

export const errorReducer = (state = {}, { payload, type }) => {
  if (type === TYPES.GLOBAL_RESET) {
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

import { actionTypes } from '../actions/GlobalActions';
import { NOT_STARTED, LOADING, SUCCESS, ERROR } from '../helpers/Status';

export default (state = {}, action) => {
  const { type } = action;

  if (type === actionTypes.GLOBAL_RESET) return {};

  const matchesStart = /(.*)_(REQUEST)/.exec(type);
  const matchesError = /(.*)_(ERROR)/.exec(type);
  const matchesReset = /(.*)_(RESET)/.exec(type);
  const matchesSuccess = /(.*)_(SUCCESS)/.exec(type);

  let status = NOT_STARTED;
  let key = null;

  if (matchesStart) {
    const [, requestName] = matchesStart;
    key = requestName;
    status = LOADING;
  } else if (matchesReset) {
    const [, requestName] = matchesReset;
    key = requestName;
    status = NOT_STARTED;
  } else if (matchesError) {
    const [, requestName] = matchesError;
    key = requestName;
    status = ERROR;
  } else if (matchesSuccess) {
    const [, requestName] = matchesSuccess;
    key = requestName;
    status = SUCCESS;
  }

  if (key) {
    return {
      ...state,
      [key]: status,
    };
  }

  return state;
};

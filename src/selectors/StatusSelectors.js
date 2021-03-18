import { STATUS } from '@/constants';

const { ERROR, LOADING, NOT_STARTED, SUCCESS } = STATUS;

export const statusSelector = (action, state) => {
  return state.status[action];
};

export const hasStatusSelector = (action, status, state) => {
  return state.status[action] === status;
};

export const notStartedSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState && status === NOT_STARTED;
  }, true);
};

export const isLoadingSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState || status === LOADING;
  }, false);
};

export const hasErrorsSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState || status === ERROR;
  }, false);
};

export const successSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const status = state.status[value] || NOT_STARTED;
    return prevState && status === SUCCESS;
  }, true);
};

export const fullStatusSelector = (action, state) => {
  const status = state.status[action];
  const error = state.error[action];
  const isLoading = status === LOADING;
  return { status, isLoading, error };
};

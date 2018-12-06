import { LOADING, NOT_STARTED, ERROR, SUCCESS } from '../helpers/Status';

export const statusSelector = (
  action,
  state,
) => state.status[action];

export const hasStatusSelector = (
  action,
  status,
  state,
) => state.status[action] === status;

export const notStartedSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState && status === NOT_STARTED;
  },
  true,
);

export const isLoadingSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState || status === LOADING;
  },
  false,
);

export const hasErrorsSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState || status === ERROR;
  },
  false,
);

export const successSelector = (actions, state) => actions.reduce(
  (prevState, value) => {
    const status = state.status[`${value}`] || NOT_STARTED;
    return prevState && status === SUCCESS;
  },
  true,
);


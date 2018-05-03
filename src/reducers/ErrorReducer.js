export default (state = {}, action) => {
  const { type, error } = action;
  const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

  if (!matches) return state;
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'ERROR' ? error : null,
  };
};

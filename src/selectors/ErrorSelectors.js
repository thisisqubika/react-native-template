export const errorsSelector = (actions, state) => {
  return actions.reduce((prevState, value) => {
    const error = state.error[value];

    if (error) {
      prevState.push(error);
    }

    return prevState;
  }, []);
};

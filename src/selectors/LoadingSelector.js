export default actions => state => actions.reduce(
  (prevState, value) => {
    const loading = state.loading[`${value}`];
    if (loading) {
      return prevState || loading;
    }
    return prevState;
  },
  false,
);

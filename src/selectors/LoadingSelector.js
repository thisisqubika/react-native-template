export default actions => state => actions.reduce(
  (prevState, value) => prevState && state.loading[`${value}`],
  true,
);

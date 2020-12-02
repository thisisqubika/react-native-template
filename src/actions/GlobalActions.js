export const TYPES = {
  GLOBAL_RESET: 'GLOBAL_RESET',
};

export const globalReset = () => ({
  type: TYPES.GLOBAL_RESET,
  payload: null,
});

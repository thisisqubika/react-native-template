export function getUser(state) {
  return Object.keys(state.user).length > 0 ? state.user : null;
}

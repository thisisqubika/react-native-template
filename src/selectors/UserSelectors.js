import Status from '../helpers/Status';

export const getUser = state => state.user.user;

export const loginIsLoading = state => state.user.loginStatus === Status.LOADING;

export const getError = state => state.user.error;

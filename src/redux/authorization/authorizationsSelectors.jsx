export const getName = state => state.authorization.name;
export const getEmail = state => state.authorization.email;
export const getTocken = state => state.authorization.tocken;
export const getIsLogged = state => state.authorization.isLogged;
export const getIsCheckingCurrent = state =>
  state.authorization.isCheckingCurrent;
export const getError = state => state.authorization.error;

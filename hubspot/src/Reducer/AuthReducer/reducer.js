import * as types from "./actionType";
const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
};

const reducer = (oldState = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    case types.LOGIN_FAILED:
      return {
        isAuth: false,
        isLoading: false,
        ...oldState,
        isError: true,
      };
    default:
      return oldState;
  }
};
export { reducer };

import * as types from "./actionType";
import axios from "axios";
const LoginAction = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "/api/login",
    baseURL: "https://reqres.in",
    data: payload,
  })
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILED }));
};

export { LoginAction };

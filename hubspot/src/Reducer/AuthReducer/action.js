import * as types from "./actionType";
import axios from "axios";

const deployedUrl="https://hubspotbackend-production.up.railway.app/"
const url="http://localhost:8700"

const LoginAction = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "/user/login",
    baseURL: url,
    data: payload,
  })
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILED }));
};

const logOutAction = (params) => (dispatch) => {

    dispatch({type:types.LOGOUT_REQUEST})

    try{
      return dispatch({type:types.LOGOUT_SUCCESS})
    }catch(err){
      return dispatch({type:types.LOGOUT_FAILED,payload:err})
    }

}

export { LoginAction, logOutAction };

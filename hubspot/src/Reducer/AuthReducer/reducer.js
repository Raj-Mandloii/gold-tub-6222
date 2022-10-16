import { getLocalStorageData } from "../../Utilis/getLoaclStorageData";
import { removeLocalStorageData } from "../../Utilis/removeLocalStorageData";
import { setLocalStorageData } from "../../Utilis/setLocalStorageData";
import * as types from "./actionType";

const initState = {
  isAuth: getLocalStorageData("tokenKey") ? true : false,
  isLoading: false,
  isError: false,
  token: getLocalStorageData("tokenKey") || "",
  logOutError:false
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

      console.log(payload)
      setLocalStorageData("tokenKey",JSON.stringify(payload))
      return {
        ...oldState,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };

    case types.LOGIN_FAILED:

      return {
        ...oldState,
        isAuth: false,
        isLoading: false,
        isError: true,
      };
    
    case types.LOGOUT_SUCCESS:
      
      removeLocalStorageData("tokenKey")
      return{
        ...oldState,
        isAuth:false,
        isError:false,
        token:""
      }

    case types.LOGOUT_FAILED:
      
      return{
        ...oldState,
        logOutError:payload
      }
    
    default:

      return oldState;

  }
};

export { reducer };

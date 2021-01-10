import { AuthActionType } from "../actions/actionTypes";
import axios from "axios";
const authState = {
  isLoggedIn: false,
  access_token: "",
  token_type: "",
  expires_in: "",
};

const LoginReducer = (state = authState, action) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      const newAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActionType.LOGIN_FAIL:
      return state;
    default:
      return state;
  }
};

const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  try {
    const authObj = JSON.parse(auth);
    const { expires_at, jwttoken } = authObj.user;
    if (new Date(expires_at) > new Date()) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`;
      return authObj;
    }
    return authState;
  } catch (error) {
    return authState;
  }
};

console.log(getAuthState());

export default LoginReducer;

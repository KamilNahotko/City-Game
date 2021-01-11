import { AuthActionType } from "../actions/actionTypes";
const authState = {
  loggingIn: false,
  isLoggedIn: false,
  access_token: "",
  token_type: "",
  expires_in: "",
};

const LoginReducer = (state = authState, action) => {
  switch (action.type) {
    case AuthActionType.LOGIN_REQUEST:
      return {
        loggingIn: true,
        ...action.payload,
      };
    case AuthActionType.LOGIN_SUCCESS:
      const newAuthState = {
        isLoggedIn: true,
        ...action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActionType.LOGIN_FAIL:
      return {
        loggingIn: false,
        ...authState,
      };
    case AuthActionType.LOGOUT_SUCCESS:
      return {
        isLoggedIn: false,
        ...state,
      };
    default:
      return state;
  }
};

export default LoginReducer;

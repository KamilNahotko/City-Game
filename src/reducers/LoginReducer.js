import { AuthActionType } from "../actions/actionTypes";
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
        ...action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActionType.LOGIN_FAIL:
      return state;
    default:
      return state;
  }
};

export default LoginReducer;

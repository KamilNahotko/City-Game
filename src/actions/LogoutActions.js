import { AuthActionType } from "./actionTypes";

export const LogoutAuth = (history) => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("auth");
      history.push("/");
    } catch (error) {
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

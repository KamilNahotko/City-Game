import axios from "axios";
import { AuthActionType, Alerts } from "./actionTypes";
export const LoginAuth = (userState, history) => {
  return async (dispatch) => {
    dispatch({ type: AuthActionType.LOGIN_REQUEST });
    dispatch({ type: Alerts.CLEAR, payload: {} });
    try {
      const res = await axios.post("/login", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      history.push("/home");
    } catch (error) {
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
      dispatch({ type: Alerts.ERROR, payload: error.response.data });
    }
  };
};

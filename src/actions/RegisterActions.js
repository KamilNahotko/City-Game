import axios from "axios";
import { AuthActionType, Alerts } from "./actionTypes";

export const RegisterAuth = (userState) => {
  return async (dispatch) => {
    dispatch({ type: AuthActionType.REGISTER_REQUEST });
    dispatch({ type: Alerts.CLEAR, payload: {} });
    try {
      const res = await axios.post("/auth/register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
      dispatch({ type: Alerts.ERROR, payload: error.response.data });
    }
  };
};

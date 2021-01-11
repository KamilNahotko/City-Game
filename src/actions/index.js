import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
  ADD_NEW_COMMENT,
  SET_CURRENT_GAME,
  AuthActionType,
  Alerts,
} from "./actionTypes";

export const addComment = (street) => ({
  type: ADD_NEW_COMMENT,
  payload: { id: uuidv4(), street: street },
});

export const setCurrentGame = (currentGame) => ({
  type: SET_CURRENT_GAME,
  payload: currentGame,
});

export const RegisterAuth = (userState) => {
  return async (dispatch) => {
    dispatch({ type: AuthActionType.REGISTER_REQUEST });
    dispatch({ type: Alerts.CLEAR, payload: {} });
    try {
      const res = await axios.post("/register", userState);
      const { data } = res;
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
      dispatch({ type: Alerts.ERROR, payload: error.response.data });
    }
  };
};

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

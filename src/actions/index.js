import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import {
  ADD_NEW_COMMENT,
  SET_CURRENT_GAME,
  AuthActionType,
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
    try {
      const res = await axios.post("/register", userState);
      const { data } = res;
      console.log(data);
      dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.REGISTER_FAIL, payload: {} });
    }
  };
};

export const LoginAuth = (userState, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/login", userState);
      const { data } = res;
      console.log(data);
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: data });
      history.push("/home");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

export const LogoutAuth = (history) => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("auth");
      history.push("/");
    } catch (error) {
      console.error(error);
      dispatch({ type: AuthActionType.LOGIN_FAIL, payload: {} });
    }
  };
};

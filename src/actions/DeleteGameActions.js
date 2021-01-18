import axios from "axios";
import { GameActionType, Alerts } from "./actionTypes";
import { authHeader } from "../authHeader";

export const DeleteGame = (postNumber) => {
  return async (dispatch) => {
    console.log(postNumber);
    const Header = authHeader();
    dispatch({ type: GameActionType.DELETE_ANSWER_REQUEST });
    dispatch({ type: Alerts.CLEAR, payload: {} });
    try {
      const res = await axios.delete(`/posts/${postNumber}`, {
        headers: { Authorization: Header.Authorization },
      });
      const { data } = res;
      dispatch({ type: GameActionType.DELETE_ANSWER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GameActionType.DELETE_ANSWER_FAIL, payload: {} });
      dispatch({ type: Alerts.ERROR, payload: error.response });
    }
  };
};

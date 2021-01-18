import axios from "axios";
import { GameActionType, Alerts } from "./actionTypes";
import { authHeader } from "../authHeader";

export const AddAnswer = (gameState, postNumber) => {
  return async (dispatch) => {
    const Header = authHeader();
    dispatch({ type: GameActionType.ADD_ANSWER_REQUEST });
    dispatch({ type: Alerts.CLEAR, payload: {} });
    try {
      const res = await axios.post(`/posts/${postNumber}/comments`, gameState, {
        headers: { Authorization: Header.Authorization },
      });
      const { data } = res;
      dispatch({ type: GameActionType.ADD_ANSWER_SUCCESS, payload: data });
      if (data.isCorrect === true) {
        dispatch({ type: GameActionType.RESET_ANSWER_STATE });
      }
    } catch (error) {
      dispatch({ type: GameActionType.ADD_ANSWER_FAIL, payload: {} });
      dispatch({ type: Alerts.ERROR, payload: error.response });
      console.log(error);
    }
  };
};

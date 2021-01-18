import axios from "axios";
import { GameActionType, Alerts } from "./actionTypes";
import { authHeader } from "../authHeader";

export const AddGameAction = (gameState) => {
  return async (dispatch) => {
    const Header = authHeader();
    dispatch({ type: GameActionType.ADD_GAME_REQUEST });
    dispatch({ type: Alerts.CLEAR, payload: {} });
    try {
      const res = await axios.post("/posts", gameState, {
        headers: { Authorization: Header.Authorization },
      });
      const { data } = res;
      dispatch({ type: GameActionType.ADD_GAME_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GameActionType.ADD_GAME_FAIL, payload: {} });
      dispatch({ type: Alerts.ERROR, payload: error.response.data });
    }
  };
};

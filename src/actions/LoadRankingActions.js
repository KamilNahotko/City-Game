import axios from "axios";
import { GameRankingType, Alerts } from "./actionTypes";
import { authHeader } from "../authHeader";

export const GameRanking = () => {
  return function (dispatch) {
    const Header = authHeader();
    dispatch({ type: GameRankingType.LOAD_RANKING_REQUEST });
    axios
      .get("/users/top", {
        headers: { Authorization: Header.Authorization },
      })
      .then((response) => {
        dispatch({
          type: GameRankingType.LOAD_RANKING_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: GameRankingType.LOAD_RANKING_FAIL, payload: {} });
        dispatch({ type: Alerts.ERROR, payload: error.response });
      });
  };
};

import axios from "axios";
import { GameActionType, Alerts } from "./actionTypes";
import { authHeader } from "../authHeader";

export const LoadGame = () => {
  return function (dispatch) {
    const Header = authHeader();
    dispatch({ type: GameActionType.LOAD_GAME_REQUEST });
    axios
      .get("/posts", {
        headers: { Authorization: Header.Authorization },
      })
      .then((response) => {
        const posts = response.data.posts_with_comments;
        const randomNumber = Math.floor(Math.random() * posts.length);
        dispatch({
          type: GameActionType.LOAD_GAME_SUCCESS,
          payload: { randomNumber, ...response.data },
        });
      })
      .catch((error) => {
        dispatch({ type: GameActionType.LOAD_GAME_FAIL, payload: {} });
        dispatch({ type: Alerts.ERROR, payload: error.response });
      });
  };
};

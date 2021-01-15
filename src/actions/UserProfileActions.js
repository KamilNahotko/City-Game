import axios from "axios";
import { ProfileActionType, Alerts } from "./actionTypes";
import { authHeader } from "../authHeader";

export const Profile = () => {
  return function (dispatch) {
    const Header = authHeader();
    dispatch({ type: ProfileActionType.PROFILE_REQUEST });
    axios
      .get("/auth/profile", {
        headers: { Authorization: Header.Authorization },
      })
      .then((response) => {
        dispatch({
          type: ProfileActionType.PROFILE_LOAD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: ProfileActionType.PROFILE_LOAD_FAIL, payload: {} });
        dispatch({ type: Alerts.ERROR, payload: error.response.data });
      });
  };
};

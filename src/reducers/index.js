import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
  CommentsReducer,
  AuthReducer,
});

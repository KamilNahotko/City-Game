import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducer";
import AuthReducer from "./AuthReducer";
import LoginReducer from "./LoginReducer";

export default combineReducers({
  CommentsReducer,
  AuthReducer,
  LoginReducer,
});

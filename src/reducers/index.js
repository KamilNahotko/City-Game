import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducer";
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import AlertReducer from "./AlertReducer";
import UserProfileReducer from "./UserProfileReducer";

export default combineReducers({
  CommentsReducer,
  RegisterReducer,
  LoginReducer,
  AlertReducer,
  UserProfileReducer,
});

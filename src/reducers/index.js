import { combineReducers } from "redux";
import CommentsReducer from "./CommentsReducer";
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import AlertReducer from "./AlertReducer";
import UserProfileReducer from "./UserProfileReducer";
import AddGameReducer from "./AddGameReducer";
import LoadGameReducer from "./LoadGameReducer";
import AddAnswerReducer from "./AddAnswerReducer";
import DeleteGameReducer from "./DeleteGameReducer";

export default combineReducers({
  CommentsReducer,
  RegisterReducer,
  LoginReducer,
  AlertReducer,
  UserProfileReducer,
  AddGameReducer,
  LoadGameReducer,
  AddAnswerReducer,
  DeleteGameReducer,
});

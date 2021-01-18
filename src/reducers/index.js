import { combineReducers } from "redux";
import RegisterReducer from "./RegisterReducer";
import LoginReducer from "./LoginReducer";
import AlertReducer from "./AlertReducer";
import UserProfileReducer from "./UserProfileReducer";
import AddGameReducer from "./AddGameReducer";
import LoadGameReducer from "./LoadGameReducer";
import AddAnswerReducer from "./AddAnswerReducer";
import DeleteGameReducer from "./DeleteGameReducer";
import LoadRankingReducer from "./LoadRankingReducer";

export default combineReducers({
  RegisterReducer,
  LoginReducer,
  AlertReducer,
  UserProfileReducer,
  AddGameReducer,
  LoadGameReducer,
  AddAnswerReducer,
  DeleteGameReducer,
  LoadRankingReducer,
});

import { GameActionType } from "../actions/actionTypes";
const gameState = {};

const AddAnswerReducer = (state = gameState, action) => {
  switch (action.type) {
    case GameActionType.ADD_ANSWER_REQUEST:
      return {
        isCorrect: "",
        isLoading: true,
        ...gameState,
      };
    case GameActionType.ADD_ANSWER_SUCCESS:
      return {
        isLoading: false,
        ...action.payload,
      };
    case GameActionType.ADD_ANSWER_FAIL:
      return {
        ...state,
      };
    case GameActionType.RESET_ANSWER_STATE:
      return {
        isCorrect: "",
        ...gameState,
      };
    default:
      return state;
  }
};

export default AddAnswerReducer;

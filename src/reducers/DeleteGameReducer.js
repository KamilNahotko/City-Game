import { GameActionType } from "../actions/actionTypes";
const gameState = {
  isComplete: false,
};

const DeleteGameReducer = (state = gameState, action) => {
  switch (action.type) {
    case GameActionType.DELETE_ANSWER_REQUEST:
      return {
        isComplete: true,
      };
    case GameActionType.DELETE_ANSWER_SUCCESS:
      return {
        isComplete: false,
        ...action.payload,
      };
    case GameActionType.DELETE_ANSWER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default DeleteGameReducer;

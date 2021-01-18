import { GameActionType } from "../actions/actionTypes";

const gameState = {
  posts_with_comments: [
    {
      id: "",
      title: "",
      body: "",
      user_id: "",
      post_author: "",
      place: "",
      image_url: "",
      created_at: "",
      updated_at: "",
      comments: [],
    },
  ],
};

const LoadGameReducer = (state = gameState, action) => {
  switch (action.type) {
    case GameActionType.LOAD_GAME_REQUEST:
      return {
        loadingIn: false,
        ...gameState,
      };
    case GameActionType.LOAD_GAME_SUCCESS:
      return {
        loadingIn: true,
        ...action.payload,
      };
    case GameActionType.LOAD_GAME_FAIL:
      return {
        ...gameState,
      };
    default:
      return state;
  }
};

export default LoadGameReducer;

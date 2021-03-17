import { GameActionType } from "../actions/actionTypes";
const gameState = {
  isComplete: false,
  isLoading: false,
  id_usera: "",
  post: {
    title: "",
    body: "",
    user_id: "",
    post_author: "",
    place: "",
    updated_at: "",
    created_at: "",
    id: "",
  },
  image_name: "",
  image_url: "",
  latitude: "",
  longitude: "",
  steet_name: {
    street: "",
  },
};

const AddGameReducer = (state = gameState, action) => {
  switch (action.type) {
    case GameActionType.ADD_GAME_REQUEST:
      return {
        isLoading: true,
      };
    case GameActionType.ADD_GAME_SUCCESS:
      return {
        isComplete: true,
        ...action.payload,
      };
    case GameActionType.ADD_GAME_FAIL:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default AddGameReducer;

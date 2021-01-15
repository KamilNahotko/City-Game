import { AddGameActionType } from "../actions/actionTypes";
const gameState = {
  isComplete: false,
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
    case AddGameActionType.ADD_GAME_REQUEST:
      return {
        isComplete: false,
      };
    case AddGameActionType.ADD_GAME_SUCCESS:
      return {
        isComplete: true,
        ...action.payload,
      };
    case AddGameActionType.ADD_GAME_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default AddGameReducer;

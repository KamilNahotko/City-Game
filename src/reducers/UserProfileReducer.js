import { ProfileActionType } from "../actions/actionTypes";

const profileState = {
  loadingIn: false,
  id: "",
  name: "",
  email: "",
  email_verified_at: "",
  google_user_id: "",
  avatar: "",
  total_scores: "",
  missed_answers: "",
  rating: "",
  created_at: "",
  updated_at: "",
};

const UserProfileReducer = (state = profileState, action) => {
  switch (action.type) {
    case ProfileActionType.PROFILE_REQUEST:
      return {
        loadingIn: false,
      };
    case ProfileActionType.PROFILE_LOAD_SUCCESS:
      return {
        loadingIn: true,
        ...action.payload,
      };
    case ProfileActionType.PROFILE_LOAD_FAIL:
      return {
        ...profileState,
      };
    default:
      return state;
  }
};

export default UserProfileReducer;

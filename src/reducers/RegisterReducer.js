import { AuthActionType } from "../actions/actionTypes";
const authState = {
  isLoggedIn: false,
  message: "",
  user: {
    name: "",
    email: "",
    updated_at: "",
    created_at: "",
    id: "",
    avatar: "",
  },
};

const RegisterReducer = (state = authState, action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      return {
        isLoggedIn: true,
        ...action.payload,
      };
    case AuthActionType.REGISTER_FAIL:
      return state;
    default:
      return state;
  }
};

export default RegisterReducer;

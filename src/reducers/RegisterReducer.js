import { AuthActionType } from "../actions/actionTypes";
const authState = {
  isRegisterIn: false,
  RegisterIn: false,
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
    case AuthActionType.REGISTER_REQUEST:
      return {
        RegisterIn: true,
        ...action.payload,
      };
    case AuthActionType.REGISTER_SUCCESS:
      return {
        isRegisterIn: true,
        ...action.payload,
      };
    case AuthActionType.REGISTER_FAIL:
      return {
        RegisterIn: false,
        ...authState,
      };
    default:
      return state;
  }
};

export default RegisterReducer;

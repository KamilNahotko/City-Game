import { Alerts } from "../actions/actionTypes";

const AlertReducer = (state = {}, action) => {
  switch (action.type) {
    case Alerts.SUCCESS:
      return {
        type: "success",
        message: action.payload,
      };
    case Alerts.ERROR:
      return {
        type: "error",
        message: action.payload,
      };
    case Alerts.CLEAR:
      return {};
    default:
      return state;
  }
};

export default AlertReducer;

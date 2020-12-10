const initialState = {
  comments: [
    { id: "1", text: "New York", time: "13" },
    { id: "2", text: "Legnica", time: "13" },
    { id: "3", text: "Wrocław", time: "13" },
    { id: "4", text: "Paris", time: "13" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;

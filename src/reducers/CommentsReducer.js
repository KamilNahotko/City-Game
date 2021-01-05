const initialState = {
  comments: [
    {
      id: "1",
      street: "wrocławska",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-s/10/85/a5/74/pomnik-anonimowego-przechodnia.jpg",
      isGuessed: true,
    },
    {
      id: "2",
      street: "Jaworzynska",
      img:
        "https://zabytki.um.warszawa.pl/sites/zabytki.um.warszawa.pl/files/pomniki%20Syrenki.jpg",
      isGuessed: false,
    },
    {
      id: "3",
      street: "Lotnicza",
      img:
        "https://www.freetimewawa.pl/wp-content/uploads/2018/06/kopernik.jpg",
      isGuessed: false,
    },
    {
      id: "4",
      street: "Hutnikow",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pomnik_Powsta%C5%84c%C3%B3w_Wlkp_Pozna%C5%84_detal.jpg",
      isGuessed: false,
    },
  ],
  currentGame: 1,
};

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case "SET_CURRENT_GAME":
      return {
        ...state,
        currentGame: action.payload,
      };
    default:
      return state;
  }
};

export default CommentsReducer;

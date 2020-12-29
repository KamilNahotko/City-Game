const initialState = {
  games: [
    {
      id: "1",
      text: "New York",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-s/10/85/a5/74/pomnik-anonimowego-przechodnia.jpg",
      description: "Opis1",
    },
    {
      id: "2",
      text: "Legnica",
      img:
        "https://zabytki.um.warszawa.pl/sites/zabytki.um.warszawa.pl/files/pomniki%20Syrenki.jpg",
      description: "Opis2",
    },
    {
      id: "3",
      text: "Wrocław",
      img:
        "https://www.freetimewawa.pl/wp-content/uploads/2018/06/kopernik.jpg",
      description: "Opis3",
    },
    {
      id: "4",
      text: "Paris",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/b/b7/Pomnik_Powsta%C5%84c%C3%B3w_Wlkp_Pozna%C5%84_detal.jpg",
      description: "Opis4",
    },
  ],
  currentGame: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_GUESS":
      return {
        ...state,
        games: [...state.games, action.payload],
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

export default rootReducer;

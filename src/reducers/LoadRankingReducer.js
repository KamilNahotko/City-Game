import { GameRankingType } from "../actions/actionTypes";

const rankingState = {
  test: [],
};

const LoadRankingReducer = (state = rankingState, action) => {
  switch (action.type) {
    case GameRankingType.LOAD_RANKING_REQUEST:
      return {
        loadingIn: false,
        ...rankingState,
      };
    case GameRankingType.LOAD_RANKING_SUCCESS:
      return {
        loadingIn: true,
        test: action.payload,
      };
    case GameRankingType.LOAD_RANKING_FAIL:
      return {
        ...rankingState,
      };
    default:
      return state;
  }
};

export default LoadRankingReducer;

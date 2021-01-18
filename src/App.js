import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "./routers/routes";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./theme/GlobalStyle";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import PrivateRoute from "./routers/PrivateRoute";
import NewGame from "./pages/NewGame";
import GameRules from "./pages/GameRules";
import RankingPage from "./pages/RankingPage";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path={routes.mainPage} component={MainPage} />
        <PrivateRoute exact path={routes.home} component={HomePage} />
        <PrivateRoute exact path={routes.userPage} component={UserPage} />
        <PrivateRoute
          exact
          path={routes.userSettings}
          component={UserSettingsPage}
        />
        <PrivateRoute exact path={routes.newGame} component={NewGame} />
        <PrivateRoute exact path={routes.gameRule} component={GameRules} />
        <PrivateRoute exact path={routes.RankingPage} component={RankingPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./theme/GlobalStyle";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import PrivateRoute from "./routers/PrivateRoute";
import { routes } from "./routers/routes";

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
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;

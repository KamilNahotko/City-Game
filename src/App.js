import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/reset-password" component={ResetPasswordPage} />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/user-page" component={UserPage} />
    </Switch>
  </BrowserRouter>
);

export default App;

import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./theme/GlobalStyle";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UserPage from "./pages/UserPage";

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/reset-password" component={ResetPasswordPage} />
      <Route exact path="/home" component={UserPage} />
    </Switch>
  </BrowserRouter>
);

export default App;

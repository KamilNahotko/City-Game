import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RegisterAuth } from "../../actions";
import {
  withStyles,
  Grid,
  TextField,
  Paper,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";

const Register = ({ classes, setTypeModal }) => {
  const [userState, setUserState] = useState({});
  const user = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const inputNameHandler = (e) => {
    const name = e.target.value;
    setUserState({
      ...userState,
      name,
    });
  };

  const inputEmailHandler = (e) => {
    const email = e.target.value;
    setUserState({
      ...userState,
      email,
    });
  };
  const inputPasswordHandler = (e) => {
    const password = e.target.value;
    setUserState({
      ...userState,
      password,
    });
  };
  const inputRePasswordHandler = (e) => {
    const password_confirmation = e.target.value;
    setUserState({
      ...userState,
      password_confirmation,
    });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(RegisterAuth(userState));
  };

  // UI functions
  const changeModal = () => {
    setTypeModal("login");
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Grid
      className={classes.root}
      item
      xs={12}
      component={Paper}
      elevation={6}
      square
    >
      <Button
        onClick={() => changeModal()}
        color="primary"
        size="large"
        className={classes.iconButton}
      >
        <ArrowBackIcon fontSize="large" />
        Wróć
      </Button>

      <div className={classes.wrapper}>
        <Typography variant="h4" component="h2" gutterBottom>
          Rejestracja
        </Typography>
        {user.isLoggedIn && (
          <Alert className={classes.alert} severity="success">
            Rejestracja została pomyślnie przeprowadzona!
          </Alert>
        )}
        <form onSubmit={submitRegister} className={classes.form}>
          <Grid spacing={3} container>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nickname"
                label="Nazwa Użytkownika"
                name="nickname"
                autoComplete="nickname"
                autoFocus
                onChange={inputNameHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Adres E-mail"
                name="email"
                autoComplete="email"
                onChange={inputEmailHandler}
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={inputPasswordHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Powtórz Hasło"
            type="password"
            id="repeatPassword"
            autoComplete="current-password"
            onChange={inputRePasswordHandler}
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Rejestruj
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" onClick={() => changeModal()} variant="body2">
              Mam już konto
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Register);

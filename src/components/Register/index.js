import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RegisterAuth } from "../../actions/RegisterActions";
import {
  withStyles,
  Grid,
  TextField,
  Paper,
  Button,
  Typography,
  Link,
  CircularProgress,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";

const Register = ({ classes, setTypeModal }) => {
  const [userState, setUserState] = useState({});
  const user = useSelector((state) => state.RegisterReducer);
  const RegisterIn = useSelector((state) => state.RegisterReducer.RegisterIn);
  const typeAlert = useSelector((state) => state.AlertReducer.type);
  const messageAlert = useSelector((state) => state.AlertReducer.message);
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
        {messageAlert && (
          <>
            <MuiAlert elevation={6} variant="filled" severity={typeAlert}>
              {messageAlert.email}
              {messageAlert.password}
              {messageAlert.name}
            </MuiAlert>
          </>
        )}
        {user.isRegisterIn && (
          <MuiAlert elevation={6} variant="filled">
            Rejestracja została pomyślnie przeprowadzona!
          </MuiAlert>
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
        {RegisterIn && <CircularProgress />}
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

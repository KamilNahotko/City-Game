import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  withStyles,
  Grid,
  TextField,
  Paper,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";
import { LoginAuth } from "../../actions";

const Login = ({ classes, isVisibility, setIsVisibility, setTypeModal }) => {
  const [userState, setUserState] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

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

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(LoginAuth(userState, history));
  };

  //UI functions
  const toggler = () => {
    setIsVisibility(!isVisibility);
  };

  const changeModalToRegister = () => {
    setTypeModal("register");
  };

  const changeModalToReset = () => {
    setTypeModal("resetPassword");
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
        onClick={() => toggler()}
        color="primary"
        size="large"
        className={classes.iconButton}
      >
        <ArrowBackIcon fontSize="large" />
        Wróć
      </Button>

      <div className={classes.wrapper}>
        <Typography variant="h4" component="h2" gutterBottom>
          Logowanie
        </Typography>

        <form onSubmit={submitRegister} className={classes.form}>
          <TextField
            onChange={inputEmailHandler}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adres E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={inputPasswordHandler}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Zaloguj
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" onClick={() => changeModalToReset()} variant="body2">
              Zrejestuj hasło
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              onClick={() => changeModalToRegister()}
              variant="body2"
            >
              Załóż konto
            </Link>
          </Grid>
          <Button
            className={classes.googleButton}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Zaloguj za pomocą Google
          </Button>
          <Button
            className={classes.fbButton}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<FacebookIcon />}
          >
            Zaloguj za pomocą Facebook
          </Button>
        </Grid>
      </div>
    </Grid>
  );
};

export default withStyles(styles)(Login);

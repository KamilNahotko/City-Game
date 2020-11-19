import React from "react";
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

const Login = ({ classes, isVisibility, setIsVisibility, setTypeModal }) => {
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

        <form className={classes.form}>
          <TextField
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

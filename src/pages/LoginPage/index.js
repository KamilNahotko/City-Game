import React from "react";
import { Link } from "react-router-dom";
import {
  withStyles,
  Grid,
  TextField,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";

const LoginPage = ({ classes }) => (
  <Grid className={classes.root} container>
    <Grid className={classes.image} item xs={false} sm={4} md={7} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Link to="/" className={classes.styledLink}>
        <Button color="primary" size="large" className={classes.iconButton}>
          <ArrowBackIcon fontSize="large" />
          Wróć
        </Button>
      </Link>
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
            <Link to="/reset-password" variant="body2">
              Zrejestuj hasło
            </Link>
          </Grid>
          <Grid item>
            <Link to="/register" variant="body2">
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
  </Grid>
);

export default withStyles(styles)(LoginPage);

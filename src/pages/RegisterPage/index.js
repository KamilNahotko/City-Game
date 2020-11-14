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
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";

const RegisterPage = ({ classes }) => (
  <Grid className={classes.root} container>
    <Grid className={classes.image} item xs={false} sm={4} md={7} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Link to="/login" className={classes.styledLink}>
        <Button color="primary" size="large" className={classes.iconButton}>
          <ArrowBackIcon fontSize="large" />
          Wróć
        </Button>
      </Link>
      <div className={classes.wrapper}>
        <Typography variant="h4" component="h2" gutterBottom>
          Rejestracja
        </Typography>
        <form className={classes.form}>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adres E-mail"
                name="email"
                autoComplete="email"
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
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Powtórz Hasło"
            type="repeatPassword"
            id="repeatPassword"
            autoComplete="current-password"
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
            <Link to="#" variant="body2">
              Mam już konto
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  </Grid>
);

export default withStyles(styles)(RegisterPage);

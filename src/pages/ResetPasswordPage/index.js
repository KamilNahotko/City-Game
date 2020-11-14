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

const ResetPasswordPage = ({ classes }) => (
  <Grid className={classes.root} container>
    <Grid className={classes.image} item xs={false} sm={4} md={7} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Link to="/login" className={classes.styledLink}>
        <Button color="primary" size="large" className={classes.iconButton}>
          <ArrowBackIcon fontSize="large" />
          Back
        </Button>
      </Link>
      <div className={classes.wrapper}>
        <Typography variant="h4" component="h2" gutterBottom>
          Zresetuj Hasło
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

          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Wyślij
          </Button>
        </form>
      </div>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ResetPasswordPage);

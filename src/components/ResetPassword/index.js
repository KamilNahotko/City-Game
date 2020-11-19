import React from "react";
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

const ResetPassword = ({ classes, setTypeModal }) => {
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
        Back
      </Button>

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
  );
};

export default withStyles(styles)(ResetPassword);

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddGameAction } from "../../../actions/AddGameActions";
import {
  withStyles,
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "./styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const AddGame = ({ classes }) => {
  const [gameState, setGameState] = useState({});
  const dispatch = useDispatch();
  const AddGameState = useSelector((state) => state.AddGameReducer);
  const alert = useSelector((state) => state.AlertReducer);

  const inputTitleHandler = (e) => {
    const title = e.target.value;
    setGameState({
      ...gameState,
      title,
    });
  };

  const inputDescriptionHandler = (e) => {
    const body = e.target.value;
    setGameState({
      ...gameState,
      body,
    });
  };

  const inputImgHandler = (e) => {
    const file = e.target.files[0];
    setGameState({
      ...gameState,
      image: file,
    });
  };

  const submitAddGame = (e) => {
    const formData = new FormData();
    formData.append("image", gameState.image, gameState.image.name);
    formData.append("title", gameState.title);
    formData.append("body", gameState.body);
    e.preventDefault();
    dispatch(AddGameAction(formData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        onSubmit={submitAddGame}
        className={classes.root}
        autoComplete="off"
      >
        <Grid container>
          <Grid className={classes.styledGridLeft} item lg={6} xs={12}></Grid>
          <Grid className={classes.styledGridRight} item lg={6} xs={12}>
            {AddGameState.isComplete && (
              <MuiAlert
                className={classes.styledMuiAlert}
                elevation={6}
                variant="filled"
              >
                Twoja gra została dodana pomyślnie!
              </MuiAlert>
            )}
            {alert.message && (
              <MuiAlert
                className={classes.styledMuiAlert}
                elevation={6}
                variant="filled"
                severity={alert.type}
              >
                {alert.message.message}
              </MuiAlert>
            )}
            <Typography variant="h5">Dodaj nową gre</Typography>

            <TextField
              required
              className={classes.styledTextFiled}
              id="standard-basic"
              label="Wpisz tytuł"
              onChange={inputTitleHandler}
            />
            <TextField
              required
              className={classes.styledTextFiled}
              id="filled-multiline-static"
              label="Wpisz opis"
              variant="outlined"
              multiline
              rows={6}
              onChange={inputDescriptionHandler}
            />
            <input
              name="image"
              accept="image/*"
              id="image"
              type="file"
              className={classes.styledInput}
              onChange={inputImgHandler}
            />
            <label htmlFor="image">
              <Button
                variant="contained"
                color="primary"
                component="span"
                className={classes.styledButton}
                startIcon={<CloudUploadIcon />}
              >
                {gameState.image === undefined
                  ? "Wybierz zdjęcie"
                  : "..." + gameState.image.name}
              </Button>
            </label>
            <Button
              className={classes.styledButton}
              type="submit"
              variant="contained"
              color="primary"
            >
              Dodaj miejsce
            </Button>
            <span className={classes.styledCircularProgress}>
              {AddGameState.isLoading && <CircularProgress />}
            </span>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default withStyles(styles)(AddGame);

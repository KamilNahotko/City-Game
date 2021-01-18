import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import {
  TextField,
  withStyles,
  Button,
  CircularProgress,
} from "@material-ui/core";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { LoadGame } from "../../../actions/LoadGameActions";
import { AddAnswer } from "../../../actions/AddAnswerActions";
import { DeleteGame } from "../../../actions/DeleteGameActions";

const AddComment = ({ classes }) => {
  const [inputStreet, setInputStreet] = useState("");
  const dispatch = useDispatch();
  const loadGamesState = useSelector((state) => state.LoadGameReducer);
  const addAnswerState = useSelector((state) => state.AddAnswerReducer);
  const postNumber =
    loadGamesState.posts_with_comments[loadGamesState.randomNumber].id;

  const nextGame = () => {
    dispatch(LoadGame());
  };

  useEffect(() => {
    if (addAnswerState.isCorrect === true) {
      dispatch(DeleteGame(postNumber));
      dispatch(LoadGame());
    }
  }, [addAnswerState]);

  const inputStreetHandler = (e) => {
    setInputStreet(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    dispatch(AddAnswer({ body: inputStreet }, postNumber));
    setInputStreet("");
  };

  return (
    <form
      onSubmit={submitCommentHandler}
      className={classes.formSection}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={inputStreetHandler}
        className={classes.comment}
        id="standard-basic"
        label="Wpisz ulice"
        value={inputStreet}
      />
      <Button
        className={classes.styledButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Odgadnij
      </Button>
      <Button
        className={classes.styledButton}
        variant="contained"
        color="primary"
        onClick={nextGame}
      >
        <AutorenewIcon />
        Losuj nowe miejsce
      </Button>
      <span className={classes.styledCircularProgress}>
        {addAnswerState.isLoading && <CircularProgress />}
      </span>
    </form>
  );
};

export default withStyles(styles)(AddComment);

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment as addCommentAction } from "../../../actions";
import styles from "./styles";
import { TextField, withStyles, Button } from "@material-ui/core";
import { setCurrentGame } from "../../../actions/index";

const FormGame = ({ classes }) => {
  const [inputCity, setInputCity] = useState("");
  const [inputStreet, setInputStreet] = useState("");
  const state = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const inputCityHandler = (e) => {
    setInputCity(e.target.value);
  };
  const inputStreetHandler = (e) => {
    setInputStreet(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    dispatch(addCommentAction(inputCity, inputStreet));
    setInputCity("");
    setInputStreet("");
  };

  const randomGameHandler = () => {
    const randomIndex = Math.floor(Math.random() * state.length);
    dispatch(setCurrentGame(randomIndex));
  };

  return (
    <form
      onSubmit={submitCommentHandler}
      className={classes.formSection}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={inputCityHandler}
        className={classes.comment}
        id="standard-basic"
        label="Wpisz miejscowosć"
        value={inputCity}
      />
      <TextField
        onChange={inputStreetHandler}
        className={classes.comment}
        id="standard-basic"
        label="Wpisz ulicę"
        value={inputStreet}
      />
      <div className={classes.buttons}>
        <Button
          onClick={randomGameHandler}
          className={classes.styledButton}
          type="button"
          variant="contained"
          color="primary"
        >
          Nowe miejsce
        </Button>
        <Button
          className={classes.styledButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          Odgadnij
        </Button>
      </div>
    </form>
  );
};

export default withStyles(styles)(FormGame);

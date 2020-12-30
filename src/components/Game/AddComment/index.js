import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment as addCommentAction } from "../../../actions";
import styles from "./styles";
import { TextField, withStyles, Button } from "@material-ui/core";
import { setCurrentGame } from "../../../actions/index";

const AddComment = ({ classes }) => {
  const [inputStreet, setInputStreet] = useState("");
  const state = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const inputStreetHandler = (e) => {
    setInputStreet(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    dispatch(addCommentAction(inputStreet));
    setInputStreet("");
  };

  const randomGameHandler = () => {
    const randomIndex = Math.floor(Math.random() * state.length);
    console.log(randomIndex);
    if (state[0].isGuessed === true) {
      dispatch(setCurrentGame(randomIndex));
    } else {
      console.log("Brak nowych konkurencji");
    }
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
    </form>
  );
};

export default withStyles(styles)(AddComment);

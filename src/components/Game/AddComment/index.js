import React from "react";
import styles from "./styles";
import { TextField, withStyles, Button } from "@material-ui/core";

const AddComment = ({
  classes,
  setInputText,
  inputText,
  setComments,
  comments,
}) => {
  const d = new Date();
  const currentHour = d.getHours();
  const currentMinutes = d.getMinutes();
  const currentTime = currentHour + ":" + currentMinutes;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    setComments([
      ...comments,
      { text: inputText, id: Math.random() * 1000, time: currentTime },
    ]);
    setInputText("");
  };
  return (
    <form
      onSubmit={submitCommentHandler}
      className={classes.formSection}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={inputTextHandler}
        className={classes.comment}
        id="standard-basic"
        label="Odgadnij miejsce"
        value={inputText}
      />

      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
      >
        Dodaj komentarz
      </Button>
    </form>
  );
};

export default withStyles(styles)(AddComment);

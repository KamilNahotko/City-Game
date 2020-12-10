import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment as addCommentAction } from "../../../actions";
import styles from "./styles";
import { TextField, withStyles, Button } from "@material-ui/core";

const AddComment = ({ classes, addComment }) => {
  const [inputText, setInputText] = useState("");
  const d = new Date();
  const currentHour = d.getHours();
  const currentMinutes = d.getMinutes();
  const currentTime = currentHour + ":" + currentMinutes;

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    addComment(inputText, currentTime);
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

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment, currentTime) =>
    dispatch(addCommentAction(comment, currentTime)),
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AddComment));

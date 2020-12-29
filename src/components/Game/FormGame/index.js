import React, { useState } from "react";
import { connect } from "react-redux";
import { addComment as addCommentAction } from "../../../actions";
import styles from "./styles";
import { TextField, withStyles, Button } from "@material-ui/core";

const FormGame = ({ classes, addComment }) => {
  const [inputCity, setInputCity] = useState("");
  const [inputStreet, setInputStreet] = useState("");
  const d = new Date();
  const currentHour = d.getHours();
  const currentMinutes = d.getMinutes();
  const currentTime = currentHour + ":" + currentMinutes;

  const inputCityHandler = (e) => {
    setInputCity(e.target.value);
  };
  const inputStreetHandler = (e) => {
    setInputStreet(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    addComment(inputCity, inputStreet, currentTime);
    setInputCity("");
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

      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        color="primary"
      >
        Odgadnij
      </Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (city, street, currentTime) =>
    dispatch(addCommentAction(city, street, currentTime)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(FormGame));

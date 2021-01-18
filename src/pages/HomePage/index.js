import React from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";
import HomeTemplate from "../../templates/HomeTemplate";
import styles from "./styles";
import Game from "../../components/Game";
import Alert from "@material-ui/lab/Alert";
import cheet from "cheet.js";

const HomePage = ({ classes }) => {
  const alertsState = useSelector((state) => state.AlertReducer);
  cheet("j e d i", function () {
    let img = document.createElement("img");
    img.src = "https://media2.giphy.com/media/krkrHAEodHgzP72rTI/giphy.gif";
    let src = document.getElementById("x");
    src.appendChild(img);
  });
  return (
    <HomeTemplate>
      <div className={classes.styledEasterEgg} id="x"></div>
      {alertsState.message && (
        <Alert variant="filled" severity="warning">
          {alertsState.message.data.message + ". Zaloguj się ponownie"}
        </Alert>
      )}
      <Game />
    </HomeTemplate>
  );
};

export default withStyles(styles)(HomePage);

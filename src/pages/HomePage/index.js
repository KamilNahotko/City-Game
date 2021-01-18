import React from "react";
import { useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";
import HomeTemplate from "../../templates/HomeTemplate";
import styles from "./styles";
import Game from "../../components/Game";
import Alert from "@material-ui/lab/Alert";

const HomePage = () => {
  const alertsState = useSelector((state) => state.AlertReducer);
  return (
    <HomeTemplate>
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

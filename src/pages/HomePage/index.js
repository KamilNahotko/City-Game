import React from "react";
import { withStyles } from "@material-ui/core";
import HomeTemplate from "../../templates/HomeTemplate";
import styles from "./styles";
import Game from "../../components/Game";

const HomePage = () => {
  return (
    <HomeTemplate>
      <Game />
    </HomeTemplate>
  );
};

export default withStyles(styles)(HomePage);

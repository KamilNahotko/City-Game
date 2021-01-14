import React from "react";
import { withStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import styles from "./styles";
import Game from "../../components/Game";

const HomePage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Game />
      </main>
    </div>
  );
};

export default withStyles(styles)(HomePage);

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import styles from "./styles";
import Game from "../../components/Game";

function HomePage({ classes }) {
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Game />
      </main>
    </div>
  );
}

HomePage.propTypes = {
  window: PropTypes.func,
};

export default withStyles(styles)(HomePage);

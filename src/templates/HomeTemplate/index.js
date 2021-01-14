import React from "react";
import { withStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import styles from "./styles";

const HomeTemplate = ({ children, classes }) => (
  <div className={classes.root}>
    <Navbar />
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
    </main>
  </div>
);

export default withStyles(styles)(HomeTemplate);

import React from "react";
import { withStyles, CircularProgress, Typography } from "@material-ui/core";
import styles from "./styles";

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
    <Typography className={classes.typography} variant="h4" component="h2">
      Trwa ładowanie kontentu...
    </Typography>
  </div>
);

export default withStyles(styles)(Loading);

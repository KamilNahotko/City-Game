import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import { withStyles, Grid, Paper } from "@material-ui/core";
import DescriptionGame from "./DescriptionGame";
import FormGame from "./FormGame";

const Game = ({ classes }) => {
  return (
    <Paper justify="center" className={classes.styledPaper}>
      <Grid className={classes.root} container justify="center">
        <Grid lg={6} sm={12} item>
          <img
            className={classes.img}
            src="https://source.unsplash.com/random"
            alt="random"
          />
        </Grid>
        <Grid lg={6} sm={12} item>
          <DescriptionGame />
          <FormGame />
        </Grid>
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const { comments } = state;
  return { comments };
};

export default connect(mapStateToProps)(withStyles(styles)(Game));

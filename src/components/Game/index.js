import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { withStyles, Grid, Paper } from "@material-ui/core";
import DescriptionGame from "./DescriptionGame";
import FormGame from "./FormGame";

const Game = ({ classes }) => {
  const state = useSelector((state) => state.CommentsReducer.comments);
  const currentGame = useSelector((state) => state.CommentsReducer.currentGame);

  return (
    <Paper className={classes.styledPaper}>
      <Grid className={classes.root} container justify="center">
        <Grid className={classes.StyledGridImg} lg={6} sm={12} item>
          <img
            className={classes.img}
            src={state[currentGame].img}
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

export default withStyles(styles)(Game);

import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { withStyles, Grid, Paper, List } from "@material-ui/core";
import ListComments from "./ListComments";
import AddComment from "./AddComment";

const Game = ({ classes }) => {
  const state = useSelector((state) => state.CommentsReducer.comments);
  const comments = useSelector((state) => state.CommentsReducer.comments);
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
          <List className={classes.list}>
            {comments.map((comment) => (
              <ListComments key={comment.id} street={comment.street} />
            ))}
          </List>
          <AddComment />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Game);

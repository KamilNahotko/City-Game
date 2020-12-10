import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import { List, withStyles, Grid } from "@material-ui/core";
import ListItemGame from "./ListItemGame";
import AddComment from "./AddComment";

const Game = ({ classes, comments }) => {
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item>
        <img
          className={classes.img}
          src="https://source.unsplash.com/random"
          alt="random"
        />
      </Grid>
      <Grid item className={classes.commentSection}>
        <List className={classes.list}>
          {comments.map((comment) => (
            <ListItemGame
              key={comment.id}
              comment={comment.text}
              time={comment.time}
            />
          ))}
        </List>
        <AddComment />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  const { comments } = state;
  return { comments };
};

export default connect(mapStateToProps)(withStyles(styles)(Game));

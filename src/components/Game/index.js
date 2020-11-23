import React, { useState } from "react";
import styles from "./styles";
import { List, withStyles, Grid } from "@material-ui/core";
import ListItemGame from "./ListItemGame";
import AddComment from "./AddComment";

const Game = ({ classes }) => {
  const [inputText, setInputText] = useState("");
  const [comments, setComments] = useState([
    { text: "New York", id: "1" },
    { text: "Legnica", id: "2" },
    { text: "Wrocław", id: "3" },
    { text: "Paris", id: "4" },
  ]);
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
        <AddComment
          setInputText={setInputText}
          inputText={inputText}
          setComments={setComments}
          comments={comments}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Game);

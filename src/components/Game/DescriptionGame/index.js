import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { Typography, withStyles, Paper } from "@material-ui/core";

const DescriptionGame = ({ classes }) => {
  const LoadGames = useSelector((state) => state.LoadGameReducer);
  return (
    <>
      <div>
        <Paper className={classes.styledPaper}>
          <Typography
            className={classes.styledTitle}
            variant="h4"
            component="h2"
          >
            Opis:
          </Typography>
          <p className={classes.styledParagraph}>
            {LoadGames.posts_with_comments[LoadGames.randomNumber].body}
          </p>
        </Paper>
      </div>
    </>
  );
};

export default withStyles(styles)(DescriptionGame);

import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { Typography, withStyles, Paper } from "@material-ui/core";

const Description = ({ classes }) => {
  const state = useSelector((state) => state.games);
  const currentGame = useSelector((state) => state.currentGame);
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
            {state[currentGame].description}
          </p>
        </Paper>
      </div>
    </>
  );
};

export default withStyles(styles)(Description);

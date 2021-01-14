import React from "react";
import styles from "./styles";
import { Typography, withStyles, Paper } from "@material-ui/core";

const DescriptionGame = ({ classes }) => {
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            accusamus, veniam quidem ducimus possimus beatae debitis voluptate
            necessitatibus repellendus explicabo, eveniet cupiditate dolore,
            tenetur excepturi neque tempore reiciendis quis dicta.
          </p>
        </Paper>
      </div>
    </>
  );
};

export default withStyles(styles)(DescriptionGame);

import React from "react";
import styles from "./styles";
import {
  Typography,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  withStyles,
} from "@material-ui/core";

const ListItemGame = ({ classes, comment, time }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kamil Nahotko" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {"Napisał o: " + time}
            </Typography>
          }
          secondary={
            <>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                Kamil Nahotko
              </Typography>
              {" — " + comment}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default withStyles(styles)(ListItemGame);

import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import {
  Typography,
  withStyles,
  ListItem,
  ListItemAvatar,
  Avatar,
  Divider,
  ListItemText,
} from "@material-ui/core";

const ListComments = ({ classes, street }) => {
  const currentGame = useSelector((state) => state.currentGame);
  return (
    <>
      <ListItem className={classes.styledListItem} alignItems="flex-start">
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
              {"Napisał o: " + "13"}
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
              {" — " + street}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default withStyles(styles)(ListComments);

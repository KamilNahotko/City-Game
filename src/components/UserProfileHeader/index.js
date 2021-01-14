import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  withStyles,
  Typography,
  Grid,
  Avatar,
  Divider,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import styles from "./styles";

const UserProfileHeader = ({ classes }) => {
  const location = useLocation();
  const profileState = useSelector((state) => state.UserProfileReducer);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item container justify="center" alignItems="center" xs={6}>
        <Avatar className={classes.large}>
          {profileState.name
            ? profileState.name.charAt(0).toUpperCase()
            : "loading"}
        </Avatar>
        <Typography className={classes.typography}>
          {profileState.name}
        </Typography>
      </Grid>
      <Grid container justify="flex-end" item xs={6}>
        {location.pathname === "/user-page" ? (
          <Link to="/user-settings" className={classes.styledLink}>
            <Button variant="contained" color="primary">
              Edytuj profil
            </Button>
          </Link>
        ) : (
          <Link to="/user-page" className={classes.styledLink}>
            <Button variant="contained" color="primary">
              <ArrowBackIcon />
              Wróć
            </Button>
          </Link>
        )}
      </Grid>
      <Divider className={classes.divider} />
    </Grid>
  );
};

export default withStyles(styles)(UserProfileHeader);

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../../actions/UserProfileActions";
import {
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  withStyles,
} from "@material-ui/core";
import Navbar from "../../components/Navbar";
import UserProfileHeader from "../../components/UserProfileHeader";
import styles from "./styles";
import Loading from "../../components/Loading/index";

const UserPage = ({ classes }) => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.UserProfileReducer);

  useEffect(() => {
    dispatch(Profile());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" alignItems="center">
          {profileState.loadingIn === true ? (
            <>
              <UserProfileHeader />
              <Grid container justify="center" alignItems="center">
                <Grid
                  container
                  direction="column"
                  item
                  alignItems="center"
                  lg={6}
                  xs={12}
                >
                  <Typography variant="h5" component="h2">
                    Ilość wygranych gier:{" "}
                    <span>{profileState.total_scores}</span>
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  item
                  xs={12}
                  lg={6}
                >
                  <Typography variant="h5" component="h2">
                    Znajomi:
                  </Typography>
                  <List
                    component="nav"
                    className={classes.list}
                    aria-label="contacts"
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText primary="Chelsea Otakan" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText primary="Chelsea Otakan" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText primary="Chelsea Otakan" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText primary="Chelsea Otakan" />
                    </ListItem>
                    <ListItem button>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText primary="Eric Hoffman" />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </>
          ) : (
            <Loading />
          )}
        </Grid>
      </main>
    </div>
  );
};

export default withStyles(styles)(UserPage);

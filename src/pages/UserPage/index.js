import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Typography,
  Grid,
  Avatar,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  typography: {
    marginLeft: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  divider: {
    width: "100%",
    margin: theme.spacing(2, 2),
  },
  list: {
    width: "100%",
    maxHeight: 200,
    overflow: "auto",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
  styledLink: {
    textDecoration: "none",
  },
}));

function UserPage() {
  //Ui functions
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" alignItems="center">
          <Grid item container justify="center" alignItems="center" xs={6}>
            <Avatar className={classes.large}>K</Avatar>
            <Typography className={classes.typography}>
              Kamil Nahotko
            </Typography>
          </Grid>
          <Grid container justify="flex-end" item xs={6}>
            <Link to="/user-settings" className={classes.styledLink}>
              <Button variant="contained" color="primary">
                Edytuj profil
              </Button>
            </Link>
          </Grid>
          <Divider className={classes.divider} />
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
                Ilość wygranych gier: <span>0</span>
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
        </Grid>
      </main>
    </div>
  );
}

UserPage.propTypes = {
  window: PropTypes.func,
};

export default UserPage;

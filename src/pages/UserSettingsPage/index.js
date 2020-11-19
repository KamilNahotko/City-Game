import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Grid, Avatar, Divider, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import PasswordChange from "../../components/PasswordChange";
import AvatarChange from "../../components/AvatarChange";
import EmailChange from "../../components/EmailChange";

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

function UserSettingsPage(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Link to="/user-page" className={classes.styledLink}>
              <Button variant="contained" color="primary">
                <ArrowBackIcon />
                Wróć
              </Button>
            </Link>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container justify="center" alignItems="center">
            <TabContext value={value}>
              <AppBar position="static">
                <TabList
                  centered
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Zmiana hasła" value="1" />
                  <Tab label="zmiana e-maila" value="2" />
                  <Tab label="zmiana avataru" value="3" />
                </TabList>
              </AppBar>
              <TabPanel value="1">
                <PasswordChange />
              </TabPanel>
              <TabPanel value="2">
                <EmailChange />
              </TabPanel>
              <TabPanel value="3">
                <AvatarChange />
              </TabPanel>
            </TabContext>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

UserSettingsPage.propTypes = {
  window: PropTypes.func,
};

export default UserSettingsPage;

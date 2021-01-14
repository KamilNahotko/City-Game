import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Profile } from "../../actions/UserProfileActions";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Navbar";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import PasswordChange from "../../components/PasswordChange";
import AvatarChange from "../../components/AvatarChange";
import EmailChange from "../../components/EmailChange";
import UserProfileHeader from "../../components/UserProfileHeader";
import styles from "./styles";
import Loading from "../../components/Loading/index";

const UserSettingsPage = ({ classes }) => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.UserProfileReducer);
  useEffect(() => {
    dispatch(Profile());
  }, [dispatch]);

  //UI functions
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
          {profileState.loadingIn === true ? (
            <>
              <UserProfileHeader />
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
            </>
          ) : (
            <Loading />
          )}
        </Grid>
      </main>
    </div>
  );
};

UserSettingsPage.propTypes = {
  window: PropTypes.func,
};

export default withStyles(styles)(UserSettingsPage);

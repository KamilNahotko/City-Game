import React, { useState } from "react";
import {
  withStyles,
  Button,
  Grid,
  Typography,
  Divider,
  Slide,
  ClickAwayListener,
} from "@material-ui/core";
import styles from "./styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Login from "../../components/Login";
import Register from "../../components/Register";
import ResetPassword from "../../components/ResetPassword";

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AssignmentIcon from '@material-ui/icons/Assignment';

const MainPage = ({ classes }) => {
  const [isVisibility, setIsVisibility] = useState(false);
  const [typeModal, setTypeModal] = useState("login");

  const toggler = () => {
    setIsVisibility((prev) => !prev);
  };
  const handleClickAway = () => {
    setIsVisibility(false);
  };
  return (
    <>
      <Grid
        className={classes.styledGrid}
        alignItems="center"
        container
        direction="column"
      >
        <Grid item xs={12}>
          <Typography
            className={classes.logo}
            color="primary"
            variant="h1"
            component="h2"
          >
            City Game
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={6}>
          <Typography
            variant="h6"
            component="p"
            className={classes.styledParagraph}
          >
           <AssignmentIcon/> Gra polega na odgadywaniu miejsc po zdjęciu <AddAPhotoIcon/>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={toggler}
            variant="contained"
            size="large"
            color="primary"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Dołącz
          </Button>
        </Grid>
        <ClickAwayListener
          mouseEvent="onMouseDown"
          onClickAway={handleClickAway}
        >
          <Slide
            className={classes.showLogin}
            direction="left"
            timeout={1200}
            in={isVisibility}
          >
            <Grid
              container
              item
              direction="row"
              justify="flex-end"
              alignItems="center"
              xs={12}
            >
              {(() => {
                switch (typeModal) {
                  case "login":
                    return (
                      <Login
                        isVisibility={isVisibility}
                        setIsVisibility={setIsVisibility}
                        setTypeModal={setTypeModal}
                      />
                    );
                  case "register":
                    return <Register setTypeModal={setTypeModal} />;
                  case "resetPassword":
                    return <ResetPassword setTypeModal={setTypeModal} />;
                  default:
                    return null;
                }
              })()}
            </Grid>
          </Slide>
        </ClickAwayListener>
      </Grid>
    </>
  );
};

export default withStyles(styles)(MainPage);

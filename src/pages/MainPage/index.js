import React, { useState, useEffect } from "react";
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
import { API_URL, splxFetchData,fetchData } from "../../api/apiUtils";


const MainPage = ({ classes }) => {

  const [isVisibility, setIsVisibility] = useState(false);
  const [typeModal, setTypeModal] = useState("login");
  const [error, setErrors] = useState({});
  const [test, setTest] = useState({});

  const toggler = () => {
    setIsVisibility((prev) => !prev);
  };
  const handleClickAway = () => {
    setIsVisibility(false);
  };
  useEffect(() => {
    fetchData(
      API_URL + "/test",
      setTest,
      setErrors
    );
    }, [setTest,setErrors]);

    
    

  return (
    <>
    {console.log(test)}
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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

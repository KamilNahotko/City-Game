import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles";
import { withStyles, Grid, Paper, Button } from "@material-ui/core";
import DescriptionGame from "./DescriptionGame";
import FormGame from "./FormGame";
import { LoadGame } from "../../actions/LoadGameActions";
import Loading from "../../components/Loading/index";
import MuiAlert from "@material-ui/lab/Alert";

const Game = ({ classes }) => {
  const addAnswerState = useSelector((state) => state.AddAnswerReducer);
  const LoadGames = useSelector((state) => state.LoadGameReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadGame());
  }, [dispatch]);

  return (
    <>
      {LoadGames.loadingIn ? (
        <>
          {LoadGames.posts_with_comments.length ? (
            <Paper className={classes.styledPaper}>
              {(() => {
                if (addAnswerState.isCorrect === true)
                  return (
                    <MuiAlert elevation={6} variant="filled" severity="success">
                      Brawo! Jest to poprawna odpowiedź!
                    </MuiAlert>
                  );
                if (addAnswerState.isCorrect === false)
                  return (
                    <MuiAlert elevation={6} variant="filled" severity="error">
                      Niepoprawna odpowiedź
                    </MuiAlert>
                  );
                else return "";
              })()}

              {addAnswerState.message ? (
                <MuiAlert elevation={6} variant="filled" severity="error">
                  {addAnswerState.message}
                </MuiAlert>
              ) : (
                ""
              )}
              <Grid className={classes.root} container justify="center">
                <Grid className={classes.StyledGridImg} lg={6} sm={12} item>
                  <img
                    className={classes.img}
                    src={
                      LoadGames.posts_with_comments[LoadGames.randomNumber]
                        .image_url
                    }
                    alt={
                      LoadGames.posts_with_comments[LoadGames.randomNumber]
                        .title
                    }
                  />
                </Grid>
                <Grid lg={6} sm={12} item>
                  <DescriptionGame />
                  <FormGame />
                </Grid>
              </Grid>
            </Paper>
          ) : (
            <div className={classes.styledDivAlert}>
              <h1>Wygląda na to, że nie ma nowych konkurencji</h1>
              <Link className={classes.styledLink} to="/new-game">
                <Button variant="contained" color="primary">
                  Dodaj gre
                </Button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default withStyles(styles)(Game);

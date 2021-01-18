import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GameRanking } from "../../actions/LoadRankingActions";
import { withStyles } from "@material-ui/core";
import Loading from "../Loading";
import styles from "./styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

const Ranking = ({ classes }) => {
  const dispatch = useDispatch();
  const LoadRanking = useSelector((state) => state.LoadRankingReducer);

  useEffect(() => {
    dispatch(GameRanking());
  }, [dispatch]);
  return (
    <>
      <Typography className={classes.styledTitle} variant="h4" component="h2">
        Ranking 20 najlepszych graczy
      </Typography>
      {LoadRanking.loadingIn ? (
        <TableContainer
          className={classes.styledTableContainer}
          component={Paper}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nazwa użytkownika</TableCell>
                <TableCell align="right">Ilość wygranych gier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {LoadRanking.test
                .sort()
                .slice(0, 20)
                .map((item) => (
                  <TableRow key={item.name}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.total_scores}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default withStyles(styles)(Ranking);

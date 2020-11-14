import React from "react";
import { Link } from "react-router-dom";
import {
  withStyles,
  Button,
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";
import styles from "./styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const MainPage = ({ classes }) => (
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link className={classes.styledLink} to="/login">
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<KeyboardArrowRightIcon />}
          >
            Dołącz
          </Button>
        </Link>
      </Grid>
    </Grid>
  </>
);

export default withStyles(styles)(MainPage);

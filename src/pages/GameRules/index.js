import React from "react";
import {
  withStyles,
  Grid,
  Typography,
} from "@material-ui/core";
import HomeTemplate from "../../templates/HomeTemplate";
import HomeIcon from "@material-ui/icons/Home";
import styles from "./styles";


const HomePage = ({classes}) => {
  
  return (
    <HomeTemplate>
      <Grid 
        alignItems="center"
        container
        direction="column">
        <Grid xs={7}>
          <Typography
          variant="h2"
          component="h3"
          className={classes.typographyStyle}>
            <HomeIcon fontSize="large"/> City Game <HomeIcon fontSize="large"/>
          </Typography>
          <Typography>
            City Game polega na odgadywaniu miejsc na świecie za pomocą podania nazwy ulicy. Po odgadnięciu prawidłowej ulicy, jesteśmy przekierowywani na stronę, gdzię można dodawać nowego posta wraz ze zdjęciem. 
          </Typography>
        </Grid>
      </Grid>

    </HomeTemplate>
  );
};

export default withStyles(styles)(HomePage);

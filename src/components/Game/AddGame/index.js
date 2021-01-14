import React from "react";
import {
  withStyles,
  Paper,
  TextField,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import styles from "./styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const AddGame = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container>
          <Grid className={classes.styledGridLeft} item lg={6} xs={12}></Grid>
          <Grid className={classes.styledGridRight} item lg={6} xs={12}>
            <Typography variant="h5">Dodaj nową gre</Typography>
            <TextField
              className={classes.styledTextFiled}
              id="standard-basic"
              label="Wpisz tytuł"
            />
            <TextField
              className={classes.styledTextFiled}
              id="filled-multiline-static"
              label="Wpisz opis"
              variant="outlined"
              multiline
              rows={6}
            />
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              className={classes.styledInput}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                className={classes.styledButton}
                startIcon={<CloudUploadIcon />}
              >
                Dodaj zdjęcie
              </Button>
            </label>
            <Button
              className={classes.styledButton}
              type="submit"
              variant="contained"
              color="primary"
            >
              Dodaj miejsce
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default withStyles(styles)(AddGame);

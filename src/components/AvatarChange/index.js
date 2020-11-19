import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Avatar } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import styles from "./styles";

const AvatarChange = ({ classes }) => (
  <>
    <Typography variant="h4" component="h2" gutterBottom>
      Zmień Avatar
    </Typography>
    <form>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Grid container>
          <Avatar>K</Avatar>
          <Button
            className={classes.upload}
            variant="contained"
            color="primary"
            component="span"
          >
            <CloudUploadIcon />
            Prześlij
          </Button>
        </Grid>
      </label>

      <Button
        className={classes.submit}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Zmień
      </Button>
    </form>
  </>
);

export default withStyles(styles)(AvatarChange);

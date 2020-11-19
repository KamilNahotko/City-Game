import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";

const PasswordChange = () => (
  <>
    <Typography variant="h4" component="h2" gutterBottom>
      Zmień hasło
    </Typography>
    <form>
      <TextField
        variant="outlined"
        type="password"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Obecne Hasło"
        name="password"
        autoComplete="password"
        autoFocus
      />
      <TextField
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Nowe Hasło"
        name="password"
        autoComplete="password"
        autoFocus
      />
      <TextField
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="password"
        label="Powtórz Hasło"
        name="password"
        autoComplete="password"
        autoFocus
      />

      <Button type="submit" fullWidth variant="contained" color="primary">
        Zmień
      </Button>
    </form>
  </>
);

export default PasswordChange;

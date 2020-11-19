import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";

const EmailChange = () => (
  <>
    <Typography variant="h4" component="h2" gutterBottom>
      Zmień E-mail
    </Typography>
    <form>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Podaj Nowy Adres E-mail"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <Button type="submit" fullWidth variant="contained" color="primary">
        Wyślij
      </Button>
    </form>
  </>
);

export default EmailChange;

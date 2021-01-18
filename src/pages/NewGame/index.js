import React from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import AddGame from "../../components/Game/AddGame";
import HomeTemplate from "../../templates/HomeTemplate";

const UserPage = () => {
  return (
    <HomeTemplate>
      <AddGame />
    </HomeTemplate>
  );
};

export default withStyles(styles)(UserPage);

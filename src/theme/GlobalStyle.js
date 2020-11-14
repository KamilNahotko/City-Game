import { withStyles } from "@material-ui/core/styles";

const GlobalStyle = withStyles({
  "@global": {
    "*, *::before, *::after": {
      boxSizing: "none",
    },
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "Roboto",
    },
  },
})(() => null);

export default GlobalStyle;

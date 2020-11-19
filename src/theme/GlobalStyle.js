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
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#3f51b5",
      outline: "1px solid slategrey",
    },
  },
})(() => null);

export default GlobalStyle;

import makeStyles from "@material-ui/core/styles/makeStyles";
const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  typography: {
    marginLeft: theme.spacing(2),
  },
  styledLink: {
    textDecoration: "none",
    color: "black",
  },
  logo: {
    textDecoration: "none",
    color: "white",
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
  },
}));

export default styles;

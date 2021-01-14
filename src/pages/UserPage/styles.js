const styles = (theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  typography: {
    marginLeft: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
  list: {
    width: "100%",
    maxHeight: 200,
    overflow: "auto",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
  },
});

export default styles;

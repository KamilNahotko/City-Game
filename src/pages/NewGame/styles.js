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
});

export default styles;

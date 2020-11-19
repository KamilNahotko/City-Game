const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  wrapper: {
    margin: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
  iconButton: {
    margin: theme.spacing(4, 0, 0, 4),
  },
  styledLink: {
    textDecoration: "none",
  },
});

export default styles;

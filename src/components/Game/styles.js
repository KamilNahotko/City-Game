const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "90%",
    height: "auto",
    margin: theme.spacing(2),
  },
  commentSection: {
    marginLeft: theme.spacing(4),
  },
  styledPaper: {
    padding: theme.spacing(4),
    width: "60%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
});

export default styles;

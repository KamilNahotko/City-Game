const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  list: {
    width: "100%",
    maxWidth: "500px",
    maxHeight: "500px",
    minHeight: "500px",
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  img: {
    width: "90%",
    maxWidth: "400px",
    height: "auto",
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
  StyledGridImg: {
    display: "flex",
    justifyContent: "center",
  },
});

export default styles;

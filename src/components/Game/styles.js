const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  img: {
    width: "90%",
    maxWidth: "400px",
    height: "auto",
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
  styledDivAlert: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  styledLink: {
    textDecoration: "none",
  },
});

export default styles;

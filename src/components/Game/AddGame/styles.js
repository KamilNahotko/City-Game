import background from "../../../assets/images/background-home.jpg";
const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    width: "60%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  styledGridLeft: {
    minHeight: "60vh",
    background: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  styledGridRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  styledInput: {
    display: "none",
  },
  styledTextFiled: {
    margin: theme.spacing(2),
  },
  styledButton: {
    margin: theme.spacing(2),
  },
  styledMuiAlert: {
    marginBottom: theme.spacing(2),
  },
});

export default styles;

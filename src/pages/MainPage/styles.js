import background from "../../assets/images/background-home.jpg";

const styles = (theme) => ({
  styledGrid: {
    minHeight: "100vh",
    background: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  logo: {
    fontWeight: "500",
    textShadow: "2px 2px 5px black",
    marginTop: theme.spacing(20),
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
  },
  styledParagraph: {
    margin: theme.spacing(4, 0, 4),
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  styledLink: {
    textDecoration: "none",
  },
  showLogin: {
    position: "fixed",
    zIndex: "10",
    background: "white",
    width: "450px",
    minHeight: "100vh",
    right: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  hideLogin: {
    display: "none",
  },
  test: {
    color: "red",
    position: "fixed",
    zIndex: "-1",
  },
});

export default styles;

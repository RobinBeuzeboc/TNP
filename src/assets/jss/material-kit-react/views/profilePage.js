import { container, title } from "../../../../assets/jss/material-kit-react.js";

import imagesStyle from "../../../../assets/jss/material-kit-react/imagesStyles.js"
import modalStyle from "../../../../assets/jss/material-kit-react/modalStyle.js";
import tooltipsStyle from "../../../../assets/jss/material-kit-react/tooltipsStyle.js";
import popoverStyles from "../../../../assets/jss/material-kit-react/popoverStyles.js";
const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important",
    fontFamily: '"Baloo 2"'
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "60px 30px 0px",
    borderRadius: "6px",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontFamily: '"Baloo 2"'

  },
  socials: {
    marginTop: "0",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999",
    fontFamily: '"Baloo 2"'
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  section: {
    padding: "70px 0 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  },
  ...modalStyle,
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal"
  },
  ...tooltipsStyle,
  ...popoverStyles
};

export default profilePageStyle;

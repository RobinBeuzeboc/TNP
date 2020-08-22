import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// core components
import Button from "./profilePageComponents/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from '@material-ui/core/IconButton';
import Header from "./profilePageComponents/Header/Header.js";
import Footer from "./profilePageComponents/Footer/Footer.js";
import GridContainer from "./profilePageComponents/Grid/GridContainer.js";
import GridItem from "./profilePageComponents/Grid/GridItem.js";
import HeaderLinks from "./profilePageComponents/Header/HeaderLinks.js";
import NavPills from "./profilePageComponents/NavPills/NavPills.js";
import Parallax from "./profilePageComponents/Parallax/Parallax.js";
import Typography from '@material-ui/core/Typography';

// import images
import profile from "../assets/img/faces/thibaut-profile-round.jpg";
import study1 from "../assets/img/study-1.jpg"

import project1 from '../assets/img/project-1.png'
import project2 from '../assets/img/project-2.png'
import project3 from '../assets/img/project-3.png'

import job1 from '../assets/img/job-1.png'
import job2 from '../assets/img/job-2.jpg'
import job3 from '../assets/img/job-3.jpg'

import client1 from '../assets/img/client-1.jpg'
import client2 from '../assets/img/client-2.jpg'
import client3 from '../assets/img/client-3.png'

// import styles
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.js"

const useStyles = makeStyles(profilePageStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";
export default function Portfolio(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const [classicModal, setClassicModal] = React.useState(false);
  const [classicModal1, setClassicModal1] = React.useState(false);
  const [classicModal2, setClassicModal2] = React.useState(false);

  return (
    <div>
      <Header
        color='transparent'
        brand="Thibaut Neu"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../assets/img/black-laptop-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.infos}>
                  <Typography variant='h3'>
                    Qui suis-je ?
                  </Typography>
                  <br />
                  <div>
                    <Typography variant='body1'>
                      Bonjour, je m'appelle Thibaut et Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                      Donec id fermentum sem.
                      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                      Proin posuere finibus blandit. Aenean a elementum massa, ac imperdiet nisl. 
                      Morbi ornare lobortis enim, vel varius nibh facilisis at.
                      Nunc at eleifend leo, sit amet cursus purus. Etiam posuere nec ipsum a accumsan.
                      Aliquam odio ligula, feugiat sed congue eu, tempor a quam. Sed in viverra arcu.
                      Curabitur maximus nibh ex, in suscipit orci mollis vitae.
                      Sed tempor nulla nec rhoncus finibus. Vivamus auctor faucibus tincidunt.
                      Duis est nibh, suscipit sit amet metus fermentum, ultrices tristique tortor.
                      Quisque cursus feugiat felis id tristique.
                    </Typography>
                  </div>
                  <div>
                    <img
                      alt="..."
                      src={profile}
                      className={navImageClasses}
                    />
                  </div>
                  <Button>
                    Mon CV
                  </Button>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.infos}>
                  <Typography variant='h3'>
                    Parcours
                  </Typography>
                  <br />
                  <div>
                   timeline goes here
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.infos}>
                  <Typography variant='h3'>
                    Compétences
                  </Typography>
                  <br />
                  <div>
                   compétences goes here
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.infos}>
                  <Typography variant='h3'>
                    Projets
                  </Typography>
                  <br />
                  <div>
                   Projets goes here
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                <div className={classes.infos}>
                  <Typography variant='h3'>
                    Passions
                  </Typography>
                  <br />
                  <div>
                   Passions goes here
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <Typography variant='h3'>
              Contactez moi
            </Typography>
            <br />
           
            {/* https://github.com/kpolakowski/Registration-form-Material-UI */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

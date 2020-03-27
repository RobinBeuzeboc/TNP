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
// import HeaderLinks from "./profilePageComponents/Header/HeaderLinks.js";
import NavPills from "./profilePageComponents/NavPills/NavPills.js";
import Parallax from "./profilePageComponents/Parallax/Parallax.js";

// import images
import profile from "../assets/img/faces/thibaut-profile-round.jpg";

import study1 from "../assets/img/study-1.jpg"

import project1 from '../assets/img/project-1.png'
import project2 from '../assets/img/project-2.png'
import project3 from '../assets/img/project-3.png'

// import styles
import profilePageStyle from "../assets/jss/material-kit-react/views/profilePage.js";

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
        // rightLinks={<HeaderLinks />}
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
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Thibaut Neu</h3> <br />
                    <h4 className={classes.title}>CHEF DE PROJET</h4><br />
                    <IconButton onClick={()=> window.open("https://www.linkedin.com/in/thibaut-neu-080307b7/", "_blank")}>
                      <LinkedInIcon fontSize='large' color='primary'/>
                    </IconButton>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum sit amet velit et elementum. Praesent cursus ex non lorem tempus, nec iaculis urna posuere. In quis ex imperdiet, tempor orci in, commodo ligula. Praesent enim ligula, ullamcorper fermentum luctus quis, pharetra eget arcu. Mauris vestibulum nunc placerat suscipit feugiat. Phasellus nec nibh pellentesque ex hendrerit malesuada id ac dui. Sed posuere diam in euismod consequat. Nunc eget congue eros, vitae ornare elit..{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Formation",
                      tabIcon: MenuBookIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          <a href='https://www.iim.fr/'>
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                            />
                            </a>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Projets",
                      tabIcon: AccountTreeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                          <a href='https://alcoometre.fr/'>
                            <img
                              alt="..."
                              src={project1}
                              className={navImageClasses}
                            />
                          </a>
                          <a href='https://www.dondorganes.fr/'>      
                              <img
                                alt="..."
                                src={project2}
                                className={navImageClasses}
                              />
                          </a>
                          <a href='https://campus-vtc.com/'>
                            <img
                              alt="..."
                              src={project3}
                              className={navImageClasses}
                            />
                          </a>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Postes",
                      tabIcon: WorkIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                              onClick={() => setClassicModal(true)}
                            />
                          <Dialog
                            classes={{
                              root: classes.center,
                              paper: classes.modal
                            }}
                            open={classicModal}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => setClassicModal(false)}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                          >
                            <DialogTitle
                              id="classic-modal-slide-title"
                              disableTypography
                              className={classes.modalHeader}
                            >
                              <IconButton
                                className={classes.modalCloseButton}
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={() => setClassicModal(false)}
                              >
                                <Close className={classes.modalClose} />
                              </IconButton>
                              <h4 className={classes.modalTitle}>Modal title 1</h4>
                            </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                              <p>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                                coast of the Semantics, a large language ocean. A small
                                river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic
                                country, in which roasted parts of sentences fly into your
                                mouth. Even the all-powerful Pointing has no control about
                                the blind texts it is an almost unorthographic life One
                                day however a small line of blind text by the name of
                                Lorem Ipsum decided to leave for the far World of Grammar.
                              </p>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button color="transparent" simple>
                                Nice Button
                              </Button>
                              <Button
                                onClick={() => setClassicModal(false)}
                                color="danger"
                                simple
                              >
                                Close
                              </Button>
                            </DialogActions>
                          </Dialog>     

                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                              onClick={() => setClassicModal1(true)}
                            />
                             <Dialog
                            classes={{
                              root: classes.center,
                              paper: classes.modal
                            }}
                            open={classicModal1}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => setClassicModal1(false)}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                          >
                            <DialogTitle
                              id="classic-modal-slide-title"
                              disableTypography
                              className={classes.modalHeader}
                            >
                              <IconButton
                                className={classes.modalCloseButton}
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={() => setClassicModal1(false)}
                              >
                                <Close className={classes.modalClose} />
                              </IconButton>
                              <h4 className={classes.modalTitle}>Modal title 2 </h4>
                            </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                              <p>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                                coast of the Semantics, a large language ocean. A small
                                river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic
                                country, in which roasted parts of sentences fly into your
                                mouth. Even the all-powerful Pointing has no control about
                                the blind texts it is an almost unorthographic life One
                                day however a small line of blind text by the name of
                                Lorem Ipsum decided to leave for the far World of Grammar.
                              </p>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button color="transparent" simple>
                                Nice Button
                              </Button>
                              <Button
                                onClick={() => setClassicModal1(false)}
                                color="danger"
                                simple
                              >
                                Close
                              </Button>
                            </DialogActions>
                          </Dialog>

                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                              onClick={() => setClassicModal2(true)}

                            />
                            <Dialog
                            classes={{
                              root: classes.center,
                              paper: classes.modal
                            }}
                            open={classicModal2}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={() => setClassicModal2(false)}
                            aria-labelledby="classic-modal-slide-title"
                            aria-describedby="classic-modal-slide-description"
                          >
                            <DialogTitle
                              id="classic-modal-slide-title"
                              disableTypography
                              className={classes.modalHeader}
                            >
                              <IconButton
                                className={classes.modalCloseButton}
                                key="close"
                                aria-label="Close"
                                color="inherit"
                                onClick={() => setClassicModal2(false)}
                              >
                                <Close className={classes.modalClose} />
                              </IconButton>
                              <h4 className={classes.modalTitle}>Modal title 3 </h4>
                            </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                              <p>
                                Far far away, behind the word mountains, far from the
                                countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove right at the
                                coast of the Semantics, a large language ocean. A small
                                river named Duden flows by their place and supplies it
                                with the necessary regelialia. It is a paradisematic
                                country, in which roasted parts of sentences fly into your
                                mouth. Even the all-powerful Pointing has no control about
                                the blind texts it is an almost unorthographic life One
                                day however a small line of blind text by the name of
                                Lorem Ipsum decided to leave for the far World of Grammar.
                              </p>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button color="transparent" simple>
                                Nice Button
                              </Button>
                              <Button
                                onClick={() => setClassicModal2(false)}
                                color="danger"
                                simple
                              >
                                Close
                              </Button>
                            </DialogActions>
                          </Dialog>    
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

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

import job1 from '../assets/img/job-1.png'
import job2 from '../assets/img/job-2.jpg'
import job3 from '../assets/img/job-3.jpg'

import client1 from '../assets/img/client-1.jpg'
import client2 from '../assets/img/client-2.jpg'
import client3 from '../assets/img/client-3.png'

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
                              src={job1}
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
                              <h3 className={classes.modalTitle}>DDB: Assistant Chef de Projet Digital</h3>
                              <h4 className={classes.modalTitle}>Alternance</h4>
                              <h5 className={classes.modalTitle}>2018-2019</h5>
                            </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                              <table>
                                  <tr>
                                    •	 Refonte du site <a href='https://alcoometre.fr/'>Alcoometre.fr</a>
                                  </tr>
                                  <tr>
                                    •	Production des visuels et des maquettes
                                  </tr>
                                  <tr>
                                    •	 Recettes
                                  </tr>
                                  <tr>
                                    •	 Production de campagnes Display (Uber et Intermarché)
                                  </tr>
                                  <tr>
                                    •	 Webmastering sur dondorganes.fr
                                  </tr>
                                  <tr>
                                    •	 Production de newsletter pour Aviva
                                  </tr>
                              </table>
                              <br />
                              <h4 className={classes.modalTitle}>Quelques clients</h4>
                              <img
                                alt="..."
                                src={client1}
                                className={navImageClasses}
                              />                            
                              <img
                                alt="..."
                                src={client2}
                                className={navImageClasses}
                              />                            
                              <img
                                alt="..."
                                src={client3}
                                className={navImageClasses}
                              />
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button color="transparent" simple onClick={()=>window.open("https://www.ddb.fr/")} >
                                Vers le site
                              </Button>
                              <Button
                                onClick={() => setClassicModal(false)}
                                color="danger"
                                simple
                              >
                                Fermer
                              </Button>
                            </DialogActions>
                          </Dialog>     

                            <img
                              alt="..."
                              src={job2}
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
                              <h3 className={classes.modalTitle}>Lesieur/Puget: Chef de Projet Digital Junior</h3>
                              <h4 className={classes.modalTitle}>Alternance</h4>
                              <h5 className={classes.modalTitle}>2017-2018</h5>              
                              </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                                <table>
                                  <tr>
                                    •	 Mise en place d’une plateforme d’e-Learning
                                  </tr>
                                  <tr>
                                    •	 RFI / RFP Social Media et e-Learning
                                  </tr>
                                  <tr>
                                    •	 Webmastering
                                  </tr>
                                  <tr>
                                    •	 Relation avec agences
                                  </tr>
                              </table>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button color="transparent" simple>
                                Vers le site
                              </Button>
                              <Button
                                onClick={() => setClassicModal1(false)}
                                color="danger"
                                simple
                              >
                                Fermer
                              </Button>
                            </DialogActions>
                          </Dialog>

                            <img
                              alt="..."
                              src={job3}
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
                              <h3 className={classes.modalTitle}>Assistant chargé de clientèle</h3>
                              <h4 className={classes.modalTitle}>Stage de 6 mois : Leader modération en France</h4>
                              <h5 className={classes.modalTitle}>2017</h5>                               
                              </DialogTitle>
                            <DialogContent
                              id="classic-modal-slide-description"
                              className={classes.modalBody}
                            >
                                <table>
                                  <tr>
                                    •	 Modération : Facebook / Instagram
                                  </tr>
                                  <tr>
                                    •	 Community management
                                  </tr>
                                  <tr>
                                    •	 Réponse de niveau 1 et 2
                                  </tr>
                                  <tr>
                                    •	 Bilans mensuels
                                  </tr>
                              </table>
                            </DialogContent>
                            <DialogActions className={classes.modalFooter}>
                              <Button color="transparent" simple>
                                Vers le site
                              </Button>
                              <Button
                                onClick={() => setClassicModal2(false)}
                                color="danger"
                                simple
                              >
                                Fermer
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

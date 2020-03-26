import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// core components
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

export default function Portfolio(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                      tabButton: "Etudes",
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
                            <h1 className={navImageClasses}> ALLO </h1>
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                            />
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

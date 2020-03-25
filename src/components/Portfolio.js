import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

// core components
import Header from "./profilePageComponents/Header/Header.js";
import Footer from "./profilePageComponents/Footer/Footer.js";
import Button from "./profilePageComponents/CustomButtons/Button.js";
import GridContainer from "./profilePageComponents/Grid/GridContainer.js";
import GridItem from "./profilePageComponents/Grid/GridItem.js";
// import HeaderLinks from "./profilePageComponents/Header/HeaderLinks.js";
import NavPills from "./profilePageComponents/NavPills/NavPills.js";
import Parallax from "./profilePageComponents/Parallax/Parallax.js";

import profile from "../assets/img/faces/thibaut-profile-round.jpg";

import study1 from "../assets/img/study-1.jpg"


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
        color="transparent"
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
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
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
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                            />
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
                            <img
                              alt="..."
                              src={study1}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
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
                            />
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
                          <GridItem xs={12} sm={12} md={4}>
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
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: AccountTreeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
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
                          <GridItem xs={12} sm={12} md={4}>
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

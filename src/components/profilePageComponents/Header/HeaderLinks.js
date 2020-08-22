/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
const menuBricks = [
  {id: 'whoAmI', name: 'Qui suis-je', link: ''},
  {id: 'studies', name: 'Parcours', link: ''},
  {id: 'skills', name: 'Compétences', link: ''},
  {id: 'projects', name: 'Projets', link: ''},
  {id: 'hobbies', name: 'Passions', link: ''},

]
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {menuBricks && menuBricks.map((brick) => 
      <ListItem className={classes.listItem}>
      <Button
          href=""
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >

          {brick.name}
        </Button>
      </ListItem>
      )}
    </List>
  );
}

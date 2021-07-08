import React from "react";

import { Link } from "react-router-dom";
import {
  createStyles,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      minWidth: "40px",
    },
    list: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    listItem: {
      paddingTop: "21px",
      paddingBottom: "21px",
    },
  })
);

interface CorporateListProps {
  items: {
    id: number;
    to: string;
    name: string;
  }[];
}

const ViewsList: React.FC<CorporateListProps> = ({ items }) => {
  const classes = useStyles();
  const itemsMap = items.map(item => (
    <ListItem
      component={Link}
      to={item.to}
      key={item.id}
      divider
      button
      classes={{
        gutters: classes.listItem,
      }}
    >
      {item.id === 1 ? (
        <ListItemIcon>
          <HomeIcon className={classes.icon} />
        </ListItemIcon>
      ) : (
        <ListItemIcon>
          <DesktopMacIcon className={classes.icon} />
        </ListItemIcon>
      )}
      <ListItemText primary={item.name} />
    </ListItem>
  ));

  return <List disablePadding>{itemsMap}</List>;
};

export default ViewsList;

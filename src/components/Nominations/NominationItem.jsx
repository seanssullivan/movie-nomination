import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/core/styles";
import { NominationsContext } from "../../contexts/nominations";

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
  },
}));

export default function NominationItem({ data: nomination }) {
  const { remove } = useContext(NominationsContext);
  const classes = useStyles();

  const handleClick = () => {
    remove(nomination);
  };

  return (
    <ListItem>
      <ListItemText
        className={classes.title}
        primary={`${nomination.Title} (${nomination.Year})`}
      />
      <ListItemSecondaryAction onClick={handleClick}>
        <IconButton
          variant="contained"
          color="secondary"
          edge="end"
          aria-label="delete"
        >
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

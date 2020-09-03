import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import { NominationsContext } from "../contexts/nominations";

export default function NominationItem({ data: nomination }) {
  const { remove } = useContext(NominationsContext);

  const handleClick = () => {
    remove(nomination);
  };

  return (
    <ListItem>
      <ListItemText primary={nomination.Title} />
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

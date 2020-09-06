import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    padding: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50%",
  },
}));

export default function Search({ searchByTitle }) {
  const [display, setDisplay] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    const text = event.target.value;
    setDisplay(text);
    searchByTitle(text, setError);
  };

  console.log("Rendered Search Bar");

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        error={!!error}
        className={classes.input}
        label="Search Movies by Title"
        value={display}
        onChange={handleChange}
        variant="outlined"
        helperText={error}
      />
    </form>
  );
}

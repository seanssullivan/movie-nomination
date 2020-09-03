import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function Search({ searchByTitle }) {
  const [display, setDisplay] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setDisplay(text);
    if (text) {
      searchByTitle(text, setError);
    }
  };

  console.log("Rendered Search Bar");

  return (
    <form noValidate autoComplete="off">
      <TextField
        error={!!error}
        label="Movie Title"
        value={display}
        onChange={handleChange}
        variant="outlined"
        helperText={error}
      />
    </form>
  );
}

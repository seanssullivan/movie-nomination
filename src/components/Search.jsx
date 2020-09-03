import React, { useState } from "react";

export default function Search({ searchByTitle }) {
  const [display, setDisplay] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setDisplay(text);
    searchByTitle(text);
  };

  return (
    <input
      type="text"
      value={display}
      placeholder={"Search for a movie"}
      onChange={handleChange}
    ></input>
  );
}

import React, { useState } from "react";
import { debounce } from "lodash";
import axios from "axios";

export default function Search() {
  const [display, setDisplay] = useState("");

  const queryAPI = debounce((query) => {
    return "query results"; // axios.get()
  });

  const handleChange = (event) => {
    const text = event.target.value;
    setDisplay(text);
    queryAPI(text);
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

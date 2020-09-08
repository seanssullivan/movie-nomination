import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Instructions from "./Instructions";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import useSearchResults from "../../hooks/useSearchResults";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "80%",
  },
  text: {
    width: "100%",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "centre",
    alignItems: "center",
  },
}));

export default function SearchPanel() {
  const { results, searchByTitle } = useSearchResults();
  const [display, setDisplay] = useState(true);
  const classes = useStyles();

  console.log("Rendered Search Panel");

  useEffect(() => {
    if (results.length > 0) {
      setDisplay(false);
    }
  }, [results]);

  return (
    <Box className={classes.search}>
      {display && <Instructions />}
      <SearchBar searchByTitle={searchByTitle} />
      <ResultsList results={results} />
    </Box>
  );
}

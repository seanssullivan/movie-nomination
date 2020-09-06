import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import useSearchResults from "../../hooks/useSearchResults";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "80%",
  },
}));

export default function SearchPanel() {
  const { results, searchByTitle } = useSearchResults();
  const classes = useStyles();

  console.log("Rendered Search Panel");

  return (
    <Box className={classes.search}>
      <SearchBar searchByTitle={searchByTitle} />
      <ResultsList results={results} />
    </Box>
  );
}

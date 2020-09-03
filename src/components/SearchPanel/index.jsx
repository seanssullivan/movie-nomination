import React from "react";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import useSearchResults from "../../hooks/useSearchResults";

export default function SearchPanel() {
  const { results, searchByTitle } = useSearchResults();

  console.log("Rendered Search Panel");

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <SearchBar searchByTitle={searchByTitle} />
        </Toolbar>
      </AppBar>
      <ResultsList results={results} />
    </Box>
  );
}

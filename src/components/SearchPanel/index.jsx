import React from "react";
import Box from "@material-ui/core/Box";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import useSearchResults from "../../hooks/useSearchResults";

export default function SearchPanel() {
  const { results, searchByTitle } = useSearchResults();

  console.log("Rendered Search Panel");

  return (
    <Box>
      <SearchBar searchByTitle={searchByTitle} />
      <ResultsList results={results} />
    </Box>
  );
}

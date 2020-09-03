import React from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import NominationList from "./NominationList";
import useMovieSearch from "../hooks/useMovieSearch";
import { NominationsProvider } from "../contexts/nominations";

export default function App() {
  const { movies, searchByTitle } = useMovieSearch();

  console.log("Rendered App");

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Search searchByTitle={searchByTitle} />
        <NominationsProvider>
          <MovieList movies={movies} />
          <NominationList />
        </NominationsProvider>
      </main>
    </div>
  );
}

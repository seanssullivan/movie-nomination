import React from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import NominationList from "./NominationList";
import useMovieSearch from "../hooks/useMovieSearch";
import useNominations from "../hooks/useNominations";

export default function App() {
  const { movies, searchByTitle } = useMovieSearch([]);
  const { nominations, nominateMovie } = useNominations([]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Search searchByTitle={searchByTitle} />
        <MovieList movies={movies} nominate={nominateMovie} />
        <NominationList movies={nominations} />
      </main>
    </div>
  );
}

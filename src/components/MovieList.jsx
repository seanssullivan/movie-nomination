import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

export default function MovieList({ movies, nominate }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} nominate={nominate} />
      ))}
    </ul>
  );
}

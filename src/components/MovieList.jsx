import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { NominationsContext } from "../contexts/nominations";
import "./MovieList.css";

export default function MovieList({ movies }) {
  const { nominations } = useContext(NominationsContext);

  const checkNomination = (id) =>
    !!nominations.find((nomination) => nomination.imdbID === id);

  console.log("Rendered Movie List");

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isNominated={checkNomination(movie.imdbID)}
          />
        );
      })}
    </ul>
  );
}

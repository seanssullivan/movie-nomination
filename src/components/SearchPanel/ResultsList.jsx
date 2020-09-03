import React, { useContext } from "react";
import MovieCard from "../MovieCard";
import { NominationsContext } from "../../contexts/nominations";
import "./ResultsList.css";

export default function ResultsList({ results }) {
  const { nominations } = useContext(NominationsContext);

  const checkNomination = (id) =>
    !!nominations.find((nomination) => nomination.imdbID === id);

  console.log("Rendered Results List");

  return (
    <ul>
      {results.map((movie) => {
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

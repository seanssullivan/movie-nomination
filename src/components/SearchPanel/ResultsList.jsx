import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import MovieCard from "../MovieCard";
import { NominationsContext } from "../../contexts/nominations";
import "./ResultsList.css";

export default function ResultsList({ results }) {
  const { nominations } = useContext(NominationsContext);

  const checkNomination = (id) =>
    !!nominations.find((nomination) => nomination.imdbID === id);

  console.log("Rendered Results List");

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      {results.map((movie) => {
        return (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isNominated={checkNomination(movie.imdbID)}
          />
        );
      })}
    </Grid>
  );
}

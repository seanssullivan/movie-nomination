import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import MovieCard from "../MovieCard";
import { NominationsContext } from "../../contexts/nominations";

export default function ResultsList({ results }) {
  const { nominations } = useContext(NominationsContext);

  const checkNomination = (id) =>
    !!nominations.find((nomination) => nomination.imdbID === id);

  const isDisabled = (id) =>
    nominations.length < 5 ? checkNomination(id) : true;

  console.log("Rendered Results List");

  return (
    <Grid container spacing={3}>
      {results.map((movie) => {
        return (
          <Grid item xs={3} sm={4}>
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isDisabled={isDisabled(movie.imdbID)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

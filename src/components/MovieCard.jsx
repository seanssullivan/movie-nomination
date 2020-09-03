import React, { useContext } from "react";
import { NominationsContext } from "../contexts/nominations";
import "./MovieCard.css";

export default function MovieCard({ movie, isNominated }) {
  const { nominate } = useContext(NominationsContext);

  const handleClick = () => nominate(movie);

  console.log(`Rendered ${movie.Title} Card`);

  return (
    <li>
      <img alt={movie.Title} src={movie.Poster} />
      <h2>{movie.Title}</h2>
      <button onClick={handleClick} disabled={isNominated}>
        Nominate
      </button>
    </li>
  );
}

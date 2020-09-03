import React, { useState } from "react";
import "./MovieCard.css";

export default function MovieCard({ movie, nominate }) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    nominate(movie);
  };

  return (
    <li>
      <img alt={movie.Title} src={movie.Poster} />
      <h2>{movie.Title}</h2>
      <button onClick={handleClick} disabled={disabled}>
        Nominate
      </button>
    </li>
  );
}

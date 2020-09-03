import React, { useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NominationsContext } from "../contexts/nominations";
import "./MovieCard.css";

export default function MovieCard({ movie, isNominated }) {
  const { nominate } = useContext(NominationsContext);

  const handleClick = () => nominate(movie);

  console.log(`Rendered ${movie.Title} Card`);

  return (
    <Card variant="contained">
      <CardContent>
        <img alt={movie.Title} src={movie.Poster} />
        <Typography variant="h5" component="h2" gutterBottom>
          {movie.Title}
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            onClick={handleClick}
            disabled={isNominated}
          >
            Nominate
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

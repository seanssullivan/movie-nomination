import React, { useContext, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { NominationsContext } from "../../contexts/nominations";

const useStyles = makeStyles({
  card: {
    position: "relative",
    minHeight: "25vw",
  },
  image: {
    minHeight: "25vw",
  },
  content: {
    position: "absolute",
    minHeight: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(0, 0, 0, .6)",
    color: "white",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function MovieCard({ movie, isDisabled }) {
  const { nominate } = useContext(NominationsContext);
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const handleOnMouseEnter = () => setHover(true);
  const handleOnMouseLeave = () => setHover(false);
  const handleClick = () => nominate(movie);

  console.log(`Rendered ${movie.Title} Card`);

  const MovieInfo = ({ movie, isDisabled }) => (
    <CardContent className={classes.content}>
      <CardHeader
        component="h3"
        className={classes.title}
        title={`${movie.Title} (${movie.Year})`}
      />
      <CardActions className={classes.button}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          disabled={isDisabled}
        >
          Nominate
        </Button>
      </CardActions>
    </CardContent>
  );

  return (
    <Card
      component="article"
      classes={{ root: classes.card }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <CardActionArea onClick={handleClick} disabled={isDisabled}>
        <CardMedia
          classes={{ root: classes.image }}
          component="img"
          alt={movie.Title}
          src={movie.Poster}
        />
        {hover && <MovieInfo movie={movie} isDisabled={isDisabled} />}
      </CardActionArea>
    </Card>
  );
}

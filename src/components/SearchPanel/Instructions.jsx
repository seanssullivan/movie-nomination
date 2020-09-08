import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "50px",
  },
  text: {
    width: "100%",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "centre",
    alignItems: "center",
  },
}));

export default function Instructions() {
  const classes = useStyles();

  console.log("Rendered Search Panel");

  return (
    <Container className={classes.root}>
      <Typography className={classes.text} variant="p" component="p">
        <strong>Nominate your five favourite movies for The Shoppies!</strong>
      </Typography>
      <Typography className={classes.text} variant="p" component="p">
        <em>
          Enter a movie title below and click the button to add it to your list.
        </em>
      </Typography>
    </Container>
  );
}

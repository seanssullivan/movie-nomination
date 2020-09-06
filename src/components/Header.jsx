import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  title: {
    fontSize: 60,
  },
  subhead: {
    fontSize: 30,
  },
}));

export default function Header() {
  const classes = useStyles();
  console.log("Rendered Header");

  return (
    <Container component="header" className={classes.root}>
      <Typography variant="h1" component="h1" className={classes.title}>
        The Shoppies
      </Typography>
      <Typography variant="h2" component="h2" className={classes.subhead}>
        Movie Awards for Entrepreneurs
      </Typography>
    </Container>
  );
}

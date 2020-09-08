import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NominationsContext } from "../../contexts/nominations";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "centre",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "centre",
    padding: 15,
  },
}));

export default function Banner() {
  const { reset } = useContext(NominationsContext);
  const classes = useStyles();
  console.log("Rendered Banner");

  const handleClick = () => {
    reset();
  };

  return (
    <Container className={classes.root}>
      <Divider />
      <Typography className={classes.text} variant="h4" component="h4">
        That's five nominations!
      </Typography>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClick}
      >
        Submit Now
      </Button>
    </Container>
  );
}

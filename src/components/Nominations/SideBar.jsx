import React from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    width: "20%",
    backgroundColor: "#202020",
  },
  header: {
    color: "white",
    height: 100,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    opacity: 0.8,
  },
});

export default function Nominations({ progress, children }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      classes={{
        paper: classes.paper,
      }}
      PaperProps={{
        component: "section",
      }}
    >
      <Container component="header" className={classes.header}>
        <Typography variant="h3" component="h3" className={classes.title}>
          Nominations
        </Typography>
      </Container>
      <Divider />
      <LinearProgress variant="determinate" value={progress} color="primary" />
      {children}
    </Drawer>
  );
}

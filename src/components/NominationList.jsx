import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import NominationItem from "./NominationItem";
import { NominationsContext } from "../contexts/nominations";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "20%",
    backgroundColor: "grey",
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
}));

export default function NominationList() {
  const { nominations } = useContext(NominationsContext);
  const classes = useStyles();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
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
      <List>
        {nominations.map((nomination, idx) => {
          return <NominationItem key={idx} data={nomination}></NominationItem>;
        })}
      </List>
    </Drawer>
  );
}

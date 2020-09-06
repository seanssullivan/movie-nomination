import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import NominationList from "./NominationList";
import { NominationsProvider } from "../contexts/nominations";

export default function App() {
  console.log("Rendered App");

  return (
    <Container component="main">
      <Header />
      <NominationsProvider>
        <Grid>
          <SearchPanel />
          <NominationList />
        </Grid>
      </NominationsProvider>
    </Container>
  );
}

import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import SearchPanel from "./SearchPanel";
import NominationList from "./NominationList";
import { NominationsProvider } from "../contexts/nominations";
// import Container from "@material-ui/core/Container";

export default function App() {
  console.log("Rendered App");

  return (
    <NominationsProvider>
      <Grid direction="row" justify="center" alignItems="flex-start">
        <SearchPanel />
        <Drawer variant="permanent" anchor="right">
          <NominationList />
        </Drawer>
      </Grid>
    </NominationsProvider>
  );
}

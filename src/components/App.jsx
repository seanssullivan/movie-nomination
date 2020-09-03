import React from "react";
import SearchPanel from "./SearchPanel";
import NominationList from "./NominationList";
import { NominationsProvider } from "../contexts/nominations";
import Container from "@material-ui/core/Container";

export default function App() {
  console.log("Rendered App");

  return (
    <Container>
      <NominationsProvider>
        <SearchPanel />
        <NominationList />
      </NominationsProvider>
    </Container>
  );
}

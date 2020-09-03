import React, { useContext } from "react";
import List from "@material-ui/core/List";
import NominationItem from "./NominationItem";
import { NominationsContext } from "../contexts/nominations";

export default function NominationList() {
  const { nominations } = useContext(NominationsContext);

  return (
    <List>
      {nominations.map((nomination, idx) => {
        return <NominationItem key={idx} data={nomination}></NominationItem>;
      })}
    </List>
  );
}

import React from "react";
import List from "@material-ui/core/List";
import NominationItem from "./NominationItem";

export default function NominationList({ nominations }) {
  return (
    <List>
      {nominations.map((nomination, idx) => {
        return <NominationItem key={idx} data={nomination}></NominationItem>;
      })}
    </List>
  );
}

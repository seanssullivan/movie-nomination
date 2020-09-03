import React, { useContext } from "react";
import { NominationsContext } from "../contexts/nominations";

export default function NominationList() {
  const { nominations } = useContext(NominationsContext);
  return (
    <ul>
      {nominations.map((nomination, idx) => {
        return <li key={idx}>{nomination.Title}</li>;
      })}
    </ul>
  );
}

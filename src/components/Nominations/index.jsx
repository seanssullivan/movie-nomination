import React, { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar";
import NominationList from "./NominationList";
import { NominationsContext } from "../../contexts/nominations";

export default function Nominations() {
  const { nominations } = useContext(NominationsContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(nominations.length * 20);
  }, [nominations]);

  return (
    <SideBar progress={progress}>
      <NominationList nominations={nominations} />
    </SideBar>
  );
}

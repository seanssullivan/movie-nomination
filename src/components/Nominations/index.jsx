import React, { useContext, useEffect, useState } from "react";
import SideBar from "./SideBar";
import Banner from "./Banner";
import NominationList from "./NominationList";
import { NominationsContext } from "../../contexts/nominations";

export default function Nominations() {
  const { nominations } = useContext(NominationsContext);
  const [showBanner, setShowBanner] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(nominations.length * 20);
  }, [nominations]);

  useEffect(() => {
    if (!showBanner && progress === 100) {
      setShowBanner(true);
    }
    if (showBanner && progress < 100) {
      setShowBanner(false);
    }
  }, [progress, showBanner]);

  return (
    <SideBar progress={progress}>
      <NominationList nominations={nominations} />
      {showBanner && <Banner />}
    </SideBar>
  );
}

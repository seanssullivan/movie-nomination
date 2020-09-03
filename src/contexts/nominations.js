import React, { createContext } from "react";
import useNominations from "../hooks/useNominations";

export const NominationsContext = createContext({
  nominations: [],
  nominate: () => null,
});

export const NominationsProvider = ({ children }) => {
  const { nominations, nominate } = useNominations();

  return (
    <NominationsContext.Provider value={{ nominations, nominate }}>
      {children}
    </NominationsContext.Provider>
  );
};

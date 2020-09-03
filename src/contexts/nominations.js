import React, { createContext } from "react";
import useNominations from "../hooks/useNominations";

export const NominationsContext = createContext({
  nominations: [],
  nominate: () => null,
  remove: () => null,
});

export const NominationsProvider = ({ children }) => {
  const { nominations, nominate, remove } = useNominations();

  return (
    <NominationsContext.Provider value={{ nominations, nominate, remove }}>
      {children}
    </NominationsContext.Provider>
  );
};

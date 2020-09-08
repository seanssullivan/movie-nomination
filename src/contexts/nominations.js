import React, { createContext } from "react";
import useNominations from "../hooks/useNominations";

export const NominationsContext = createContext({
  nominations: [],
  nominate: () => null,
  remove: () => null,
});

export const NominationsProvider = ({ children }) => {
  const { nominations, nominate, remove, reset } = useNominations();

  return (
    <NominationsContext.Provider
      value={{ nominations, nominate, remove, reset }}
    >
      {children}
    </NominationsContext.Provider>
  );
};

import { useReducer } from "react";
import reducer, { SET_NOMINATION } from "../reducers/nominations";

export default function useNominations() {
  const [nominations, dispatch] = useReducer(reducer, []);

  const nominateMovie = (movie) => {
    dispatch({ type: SET_NOMINATION, movie });
  };

  return { nominations, nominateMovie };
}

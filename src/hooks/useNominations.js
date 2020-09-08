import { useReducer } from "react";
import reducer, {
  SET_NOMINATION,
  REMOVE_NOMINATION,
  RESET_NOMINATIONs,
} from "../reducers/nominations";

export default function useNominations() {
  const [nominations, dispatch] = useReducer(reducer, []);

  const nominate = (movie) => {
    dispatch({ type: SET_NOMINATION, movie });
  };

  const remove = (movie) => {
    dispatch({ type: REMOVE_NOMINATION, movie });
  };

  const reset = () => {
    dispatch({ type: RESET_NOMINATIONs });
  };

  return { nominations, nominate, remove, reset };
}

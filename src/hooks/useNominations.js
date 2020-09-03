import { useReducer } from "react";
import reducer, {
  SET_NOMINATION,
  REMOVE_NOMINATION,
} from "../reducers/nominations";

export default function useNominations() {
  const [nominations, dispatch] = useReducer(reducer, []);

  const nominate = (movie) => {
    dispatch({ type: SET_NOMINATION, movie });
  };

  const remove = (movie) => {
    dispatch({ type: REMOVE_NOMINATION, movie });
  };

  return { nominations, nominate, remove };
}

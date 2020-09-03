import { useReducer } from "react";
import axios from "axios";
import reducer, { SET_MOVIES } from "reducers/movies";

export function useNominations() {
  const [movies, dispatch] = useReducer(reducer, []);

  const searchByTitle = (query) => {
    return axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&type=movie&s=${query}`
      )
      .then((response) => {
        console.log(response);
        // dispatch({ type: SET_MOVIES, movies });
      });
  };

  return { movies, searchByTitle };
}

// `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&type=movie&s=${}`

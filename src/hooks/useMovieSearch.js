import { useReducer } from "react";
import { debounce } from "lodash";
import axios from "axios";
import reducer, { SET_MOVIES } from "../reducers/movies";

export default function useNominations() {
  const [movies, dispatch] = useReducer(reducer, []);

  const searchByTitle = debounce((query) => {
    const key = process.env.REACT_APP_OMDB_KEY;
    return axios
      .get(`http://www.omdbapi.com/?apikey=${key}&type=movie&s=${query}`)
      .then((response) => {
        dispatch({ type: SET_MOVIES, movies: response.data.Search });
      });
  }, 1000);

  return { movies, searchByTitle };
}

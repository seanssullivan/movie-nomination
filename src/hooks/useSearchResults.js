import { useReducer } from "react";
import { debounce } from "lodash";
import axios from "axios";
import reducer, { SET_RESULTS } from "../reducers/searchResults";

export default function useSearchResults() {
  const [results, dispatch] = useReducer(reducer, []);

  const searchByTitle = debounce((query, setError) => {
    const key = process.env.REACT_APP_OMDB_KEY;
    if (query) {
      return axios
        .get(`https://www.omdbapi.com/?apikey=${key}&type=movie&s=${query}`)
        .then((response) => {
          if (response.data.Error) {
            throw response.data.Error;
          }
          dispatch({
            type: SET_RESULTS,
            results: response.data.Search,
          });
          setError("");
        })
        .catch((error) => setError(error));
    }
  }, 1000);

  return { results, searchByTitle };
}

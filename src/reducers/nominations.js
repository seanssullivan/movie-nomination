export const SET_NOMINATION = "SET_NOMINATION";
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";

export default function reducer(state, action) {
  if (action.type === SET_NOMINATION) {
    const { movie } = action;
    return [...state, movie];
  }

  if (action.type === REMOVE_NOMINATION) {
    const { movie } = action;
    return state.filter((nomination) => nomination.imdbID !== movie.imdbID);
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

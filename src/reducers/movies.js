export const SET_MOVIES = "SET_MOVIES";

export default function reducer(state, action) {
  if (action.type === SET_MOVIES) {
    const { movies } = action;
    return [...movies];
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

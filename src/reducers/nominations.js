export const SET_NOMINATION = "SET_NOMINATION";
export const DELETE_NOMINATION = "DELETE_NOMINATION";

export default function reducer(state, action) {
  if (action.type === SET_NOMINATION) {
    const { movie } = action;
    return [...state, movie];
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

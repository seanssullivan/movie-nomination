export const SET_RESULTS = "SET_RESULTS";

export default function reducer(state, action) {
  if (action.type === SET_RESULTS) {
    const { results } = action;
    return [...results];
  }

  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

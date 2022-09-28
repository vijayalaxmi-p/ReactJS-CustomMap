const initialState = {
  posts: [],
  loading: true,
  error: false,
};
export function getPosts(state = initialState, action) {
  if (action.type === "getPosts") {
    return { ...state, posts: action.payload, error: false, loading: false }
  }
  return state;

}
import { FETCH_POSTS } from '../actions/postActions';



const defaultState = [
  { id: 1, title: "Test Post 1", body: "Test Body 1", date: "2/8/2018"},
  { id: 2, title: "Test Post 2", body: "Test Body 2", date: "2/8/2018"},
  { id: 3, title: "Test Post 3", body: "Test Body 3", date: "2/8/2018"},
  { id: 4, title: "Test Post 4", body: "Test Body 4", date: "2/8/2018"},
  { id: 5, title: "Test Post 5", body: "Test Body 5", date: "2/8/2018"}
];

const postsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case FETCH_POSTS:
      return state;
    default:
      return state;
  }
}

export default postsReducer;

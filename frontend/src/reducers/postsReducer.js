import { FETCH_POSTS } from '../actions/postActions';

const postsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case FETCH_POSTS:
      return Object.assign({}, newState, action.payload)
    default:
      return state;
  }
}

export default postsReducer;

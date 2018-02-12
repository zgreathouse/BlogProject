import _ from 'lodash'
import { FETCH_POSTS, DELETE_POST } from '../actions/postActions';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case FETCH_POSTS:
      return Object.assign({}, newState, action.payload)
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}

export default postsReducer;

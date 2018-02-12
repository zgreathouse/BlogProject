import axios from 'axios';

export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";
export const DELETE_POST = "FETCH_POST";

//action which fetches a single post from the database
export const fetchPost = id => async dispatch => {
  const res = await axios.get(`/api/posts/${id}`);

  dispatch({
    type: FETCH_POST,
    payload: res.data
  });
};

//action which fetches all the posts from the database
export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/posts');

  dispatch({
    type: FETCH_POSTS,
    payload: res
  });
};

//action which deletes a single post from the database
export const deletePost = (id, callback) => async dispatch => {
  await axios.delete(`/api/posts/${id}`)
    .then(() => callback());

  dispatch({
    type: DELETE_POST,
    payload: id
  });
};

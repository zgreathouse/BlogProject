import axios from 'axios';

export const FETCH_POST = "FETCH_POST";
export const FETCH_POSTS = "FETCH_POSTS";

//action which fetches a single post from the database
export const fetchPost = id => dispatch => {
  const res = await axios.get(`/api/tournaments/${id}`);

  dispatch({
    type: FETCH_POST,
    payload: res.data
  });
};

//action which fetches all the posts from the database
export const fetchPosts = () => dispatch => {
  const res = await axios.get('/api/tournaments');

  dispatch({
    type: FETCH_POSTS,
    payload: res.data
  });
};

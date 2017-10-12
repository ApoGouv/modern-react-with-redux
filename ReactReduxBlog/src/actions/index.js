import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

// e.g: http://reduxblog.herokuapp.com/api/posts?key=LAKOUVA1234
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=LAKOUVA1234';
export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
/**
 * File    : reducer_posts.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 12/10/2017
 */
import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type){
    case DELETE_POST:
      // if you find an the deleted id in the state, drop it
      return _.omit(state, action.payload);
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state,  };
      // newState[post.id] = post;
      // return newState;

      // this will override any previous records with the same id
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // we get from API: [ postObj, postObj, postObj ]
      // we transform what we get, to { postID: {postObj} }
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
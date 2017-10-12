/**
 * File    : reducer_posts.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 12/10/2017
 */
import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type){
    case FETCH_POSTS:
      // we get fro mAPI: [ postObj, postObj, postObj ]
      // we transform what we get, to { postID: {postObj} }
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
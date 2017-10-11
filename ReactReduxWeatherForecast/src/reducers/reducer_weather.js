/**
 * File    : reducer_weather.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 11/10/2017
 */
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // here we avoid state.push(), cause like that we would change/mutate the state directly
      // in Redux we do not want to mutate the state
      // instead, we use state.concat(), which return a NEW array which includes the old and the added values.
      // return state.concat([action.payload.data]);
      // var parts = ['two', 'three'];
      // var numbers = ['one', ...parts, 'four', 'five']; // ["one", "two", "three", "four", "five"]
      return [action.payload.data, ...state];
  }
  return state;
}
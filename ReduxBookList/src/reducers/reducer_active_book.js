/**
 * File    : reducer_active_book.js
 * Project : modern-react-with-redux
 * Author  : Apostolos Gouvalas
 * Date    : 11/10/2017
 */
/**
 *
 * @param state: the current state. State here is not application state, bt only
 *              the state this reducer is responsible for.
 *              If "state = undefined" we set it to null.
 * @param action
 */
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
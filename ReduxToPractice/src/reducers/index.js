import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // state: value
  books: BooksReducer
});

export default rootReducer;

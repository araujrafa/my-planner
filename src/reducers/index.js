import { combineReducers } from 'redux';

import books from './booksReducer';
import body from './bodyReducer';

export default combineReducers({
  body,
  books
});

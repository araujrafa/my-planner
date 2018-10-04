import { combineReducers } from 'redux';

import data from './dataReducer';
import books from './booksReducer';

export default combineReducers({
  data,
  books
});

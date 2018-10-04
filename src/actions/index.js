'use strict';

import { todosRef, booksRef } from '../config/firebase';
import { FETCH_TODOS, FETCH_BOOKS } from './types';

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
}

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
}

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    })
  });
}

export const addBook = newBook => async dispatch => {
  const { name, initialDate, endDate } = newBook;
  booksRef.push().set({
    name,
    initialDate,
    endDate
  });
}

export const updateBook = book => async dispatch => {
  const { id, name, initialDate, endDate } = book;
  booksRef.child(id).set({
    name,
    initialDate,
    endDate
  });
}

export const fetchBooks = () => async dispatch => {
  booksRef.on('value', snapshot => {
    dispatch({
      type: FETCH_BOOKS,
      payload: snapshot.val()
    })
  });
}
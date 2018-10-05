
import { booksRef } from '../config/firebase';
import { FETCH_BOOKS } from './types';

const getData = data => {
  const filtered = Object.keys(data)
    .filter(key => key !== 'id' && key !== 'ref' && typeof data[key] !== 'function')
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj
    }, {});
  
  return filtered;
}

const getRef = (ref) => {
  switch (ref) {
    case 'books':
      return { ref: booksRef, type: FETCH_BOOKS }
    default:
      return {};
  }
}

export const addData = newData => async dispatch => {
  let dataRef = getRef(newData.ref).ref;
  dataRef.push().set(getData(newData));
}

export const updateData = update => async dispatch => {
  const dataRef = getRef(newData.ref).ref;
  dataRef.child(update.id).update(getData(update));
}

export const removeData = newData => async dispatch => {
  let dataRef = getRef(newData.ref).ref;
  dataRef.child(update.id).remove();
}

export const fetchData = ref => async dispatch => {
  const opt = getRef(ref);

  opt.ref.on('value', snapshot => {
    dispatch({
      type: opt.type,
      payload: snapshot.val()
    })
  });
}

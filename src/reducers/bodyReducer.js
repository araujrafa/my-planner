import { FETCH_BODY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BODY:
      return action.payload;
    default:
      return state;
  }
}
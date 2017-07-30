
import * as actionTypes from '../constants/actionTypes';

export default function personalReduce(state = 0, action) {
  const index = action.payload
  switch (action.type) {
    case actionTypes.SET_EDIT_PERSON:
      return index
    default:
    	return state
	}
}

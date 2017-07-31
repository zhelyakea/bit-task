
import * as actionTypes from '../constants/actionTypes';

export default function reducer(state = null, action) {
  const id = action.payload
  switch (action.type) {
    case actionTypes.SET_EDIT_TRANSACTIONS:
      return id
    default:
    	return state
	}
}

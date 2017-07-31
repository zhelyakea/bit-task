
import * as actionTypes from '../constants/actionTypes';

export default function payload(state = [], action) {
  const banks = action.payload
  switch (action.type) {
    case actionTypes.UPDATE_BANKS:
      return banks
    default:
    	return state
	}
}

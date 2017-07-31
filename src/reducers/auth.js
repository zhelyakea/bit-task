
import * as actionTypes from '../constants/actionTypes';

export default function reducer(state = false, action) {
  const auth = action.payload
  switch (action.type) {
    case actionTypes.SET_AUTH:
      return auth
    default:
    	return state
	}
}

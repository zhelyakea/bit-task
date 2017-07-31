
import * as actionTypes from '../constants/actionTypes';

export default function reducer(state = false, action) {
  switch (action.type) {
    case actionTypes.SET_AUTH:
      const auth = action.auth
      return auth
    default:
    	return state
	}
}

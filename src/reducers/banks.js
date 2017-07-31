
import * as actionTypes from '../constants/actionTypes';

const banks = {
  list: [],
  index: {}
}

export default function payload(state = banks, action) {
	const newstate = {...state}
  switch (action.type) {
    case actionTypes.UPDATE_BANKS:
      const banks = action.banks
      banks.forEach((key, index) => {
        newstate.list = [...banks]
        newstate.index[banks[index].id] = index
      })
      return newstate
    default:
    	return state
	}
}

import * as actionTypes from '../constants/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

const banks = {}

export default function banksReducer(state = banks, action) {
	const newstate = {...state}
  switch (action.type) {
    case actionTypes.UPDATE_BANKS:
      const banks = action.banks
      banks.forEach((key, index) => {
        newstate[banks[index].id] = {...banks[index]}
      })
      return newstate
    default:
    	return state
	}
}

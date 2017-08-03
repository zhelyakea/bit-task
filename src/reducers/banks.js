import * as actionTypes from '../constants/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

// let banks = new Map()
// console.log(typeof(banks))
export default function banksReducer(state = new Map(), action) {
	const newstate = new Map()
  switch (action.type) {
    case actionTypes.UPDATE_BANKS:
      const banks = action.banks
      // console.log(banks)
      banks.forEach((key, index) => {
        // console.log(key, index)
        // newstate[banks[index].id] = {...banks[index]}
        let bank = {...banks[index]}
        // console.log(bank)
        let id = banks[index].id
        // console.log(banks.has(id))
      newstate.set(id, bank)
        // console.log(newstate)
      })
      // console.log(newstate)
      return newstate
    default:
    	return state
	}
}

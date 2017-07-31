
import * as actionTypes from '../constants/actionTypes';

export default function reducer(state = [], action) {
  const newstate = [...state]
  switch (action.type) {
    case actionTypes.UPDATE_TRANSACTIONS:
      let transactions = [...action.payload]
      return transactions
    case actionTypes.ADD_TRANSACTIONS:
      let transaction = action.payload
      newstate.push(transaction)
      return newstate
    case actionTypes.DELETE_TRANSACTIONS:
      let index = newstate.indexOf(action.payload)
      newstate.splice(index, 1)
      return newstate
    default:
    	return state
	}
}

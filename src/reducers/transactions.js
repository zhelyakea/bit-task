import * as actionTypes from '../constants/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

export default function transactionsReducer(state = [], action) {
  const newstate = [...state]
  switch (action.type) {
    case actionTypes.UPDATE_TRANSACTIONS:
      let transactions = [...action.transactions]
      transactions.forEach((key, index) => {
        let transaction = transactions[index]
        if(!newstate.includes(transaction)) newstate.push(transaction)
      })
      return newstate
    case actionTypes.ADD_TRANSACTIONS:
      let transaction_to_add = action.transaction
      newstate.push(transaction_to_add)
      return newstate
    case actionTypes.DELETE_TRANSACTIONS:
      let transaction_to_delete = action.transaction
      let index = newstate.indexOf(transaction_to_delete)
      newstate.splice(index, 1)
      return newstate
    default:
    	return state
	}
}

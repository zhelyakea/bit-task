import * as actionTypes from '../constants/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

let transactions = new Map()
export default function transactionsReducer(state = transactions, action) {
  const newstate = new Map(state)
  switch (action.type) {
    case actionTypes.UPDATE_TRANSACTIONS:
      let transactions = action.transactions
      transactions.forEach((value, index) => {
        // console.log(value, key)
        // console.log(newstate.has(value.id))
        if (!newstate.has(value.id)) newstate.set(value.id, {...value})
        // let transaction = transactions[index]
        // if(!newstate.includes(transaction)) { newstate.push(transaction) }
        // console.log(!newstate.includes(transaction))
      })
      return newstate
    case actionTypes.ADD_TRANSACTIONS:
      let transaction_to_add = action.transaction
      // newstate.push(transaction_to_add)
      newstate.set(transaction_to_add.id, {...transaction_to_add})
      console.log(newstate)
      return newstate
    case actionTypes.DELETE_TRANSACTIONS:
    console.log(newstate)
      let transaction_to_delete = action.transaction
      // let index = newstate.indexOf(transaction_to_delete)
      // newstate.splice(index, 1)
      // newstate.keys().forEach(key => console.log(key))
      let id = transaction_to_delete.id
      newstate.delete(id)
      return newstate
    default:
    	return state
	}
}

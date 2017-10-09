import * as actionTypes from "../constants/actionTypes";

let transactions = new Map();
export default function transactionsReducer(state = transactions, action) {
  const newstate = new Map(state);
  switch (action.type) {
    case actionTypes.UPDATE_TRANSACTIONS:
      let transactions = action.transactions;
      transactions.forEach((value, index) => {
        if (!newstate.has(value.id)) newstate.set(value.id, { ...value });
      });
      return newstate;
    case actionTypes.ADD_TRANSACTIONS:
      let transaction_to_add = action.transaction;
      newstate.set(transaction_to_add.id, { ...transaction_to_add });
      return newstate;
    case actionTypes.DELETE_TRANSACTIONS:
      let transaction_to_delete = action.transaction;
      let id = transaction_to_delete.id;
      newstate.delete(id);
      return newstate;
    default:
      return state;
  }
}

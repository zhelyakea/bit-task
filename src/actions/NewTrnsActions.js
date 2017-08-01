import * as actionTypes from '../constants/actionTypes';

export function addTransaction(transaction) {
  return {
    type: actionTypes.ADD_TRANSACTIONS,
    transaction: transaction
  }
}

import * as actionTypes from '../constants/actionTypes';

import { getBanks } from '../actions/BanksActions'
import { getTransactions } from '../actions/TrnsActions'

export function addTransaction(transaction) {
  return {
    type: actionTypes.ADD_TRANSACTIONS,
    transaction: transaction
  }
}
export function getTransactionsData(){
  return (dispatch) => {
    dispatch(getBanks())
    dispatch(getTransactions())
  }
}

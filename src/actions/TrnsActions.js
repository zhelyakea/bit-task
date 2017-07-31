import { fetch_post } from '../services/fetch'
import * as fetchActions from './FetchActioins'

import * as actionTypes from '../constants/actionTypes';

import { transactions } from '../data/transactions'

export function getTransactions() {
  return (dispatch) => {
    dispatch(fetchActions.getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(fetchActions.getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(updateTransactions(transactions))
        }
      })
      .catch(function(err) {
        dispatch(fetchActions.getDataFailure())
      })
  }
}
export function updateTransactions(transactions) {
  return {
    type: actionTypes.UPDATE_TRANSACTIONS,
    transactions: transactions
  }
}
export function deleteTransaction(transaction) {
  return {
    type: actionTypes.DELETE_TRANSACTIONS,
    transaction: transaction
  }
}

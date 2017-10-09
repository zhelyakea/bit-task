import { fetch_post } from "../services/fetch";
import { getData, getDataSuccess, getDataFailure } from "./FetchActioins";

import * as actionTypes from "../constants/actionTypes";

import { transactions } from "../data/transactions";

export function getTransactions() {
  return dispatch => {
    dispatch(getData());
    fetch_post(`http://httpbin.org/ip`)
      .then(data => {
        dispatch(getDataSuccess());
        if (data.hasOwnProperty("origin")) {
          dispatch(updateTransactions(transactions));
        }
      })
      .catch(function(err) {
        dispatch(getDataFailure());
      });
  };
}
export function updateTransactions(transactions) {
  return {
    type: actionTypes.UPDATE_TRANSACTIONS,
    transactions: transactions
  };
}
export function deleteTransaction(transaction) {
  return {
    type: actionTypes.DELETE_TRANSACTIONS,
    transaction: transaction
  };
}

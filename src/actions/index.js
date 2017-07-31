
import * as actionTypes from '../constants/actionTypes';

export function getData() {
  return {
    type: actionTypes.FETCHING_DATA
  }
}
export function getDataSuccess(data) {
  return {
    type: actionTypes.FETCHING_DATA_SUCCESS,
    data,
  }
}
export function getDataFailure() {
  return {
    type: actionTypes.FETCHING_DATA_FAILURE
  }
}
export function authentification(state) {
  return {
    type: actionTypes.SET_AUTH,
    payload: state
  }
}
export function updateBanks(banks) {
  return {
    type: actionTypes.UPDATE_BANKS,
    payload: banks
  }
}
export function setEditTransactions(id) {
  return {
    type: actionTypes.SET_EDIT_TRANSACTIONS,
    payload: id
  }
}
export function updateTransactions(transactions) {
  return {
    type: actionTypes.UPDATE_TRANSACTIONS,
    payload: transactions
  }
}
export function add_transaction(transactions) {
  return {
    type: actionTypes.ADD_TRANSACTIONS,
    payload: transactions
  }
}
export function delete_transaction(transaction) {
  return {
    type: actionTypes.DELETE_TRANSACTIONS,
    payload: transaction
  }
}

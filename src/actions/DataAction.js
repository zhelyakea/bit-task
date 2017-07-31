import { hashHistory } from 'react-router'
import { fetch_post } from '../services/fetch'

import * as actions from './'

import { banks } from '../data/banks'
import { transactions } from '../data/transactions'

export function getAuth(query) {
  return (dispatch) => {
    dispatch(actions.getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(actions.getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(actions.authentification(true))
          hashHistory.push('/transactions')
        }
      })
      .catch(function(err) {
      })
  }
}
export function getBanks() {
  return (dispatch) => {
    dispatch(actions.getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(actions.getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(actions.updateBanks(banks))
        }
      })
      .then((data) => {
        dispatch(actions.getData())
        fetch_post(`http://httpbin.org/ip`)
          .then((data) => {
            dispatch(actions.getDataSuccess())
            if(data.hasOwnProperty('origin')){
              dispatch(actions.updateTransactions(transactions))
            }
          })
          .catch(function(err) {
            dispatch(actions.getDataFailure())
          })
      })
      .catch(function(err) {
        dispatch(actions.getDataFailure())
      })
  }
}
export function toBack() {
  return (dispatch) => {
    dispatch(actions.authentification(false))
    dispatch(actions.setEditTransactions(null))
    hashHistory.push('/')
  }
}
export function toNewTransactioins() {
  return (dispatch) => {
    dispatch(actions.setEditTransactions(null))
    hashHistory.push('/newtransactions')
  }
}
export function toListTransaction() {
  return (dispatch) => {
    hashHistory.push('/transactions')
  }
}
export function addTransaction(transactions) {
  return (dispatch) => {
    dispatch(actions.add_transaction(transactions))
    dispatch(actions.setEditTransactions(transactions.id))
  }
}
export function deleteTransaction(transaction) {
  return (dispatch) => {
    dispatch(actions.delete_transaction(transaction))
    dispatch(actions.setEditTransactions(null))
  }
}

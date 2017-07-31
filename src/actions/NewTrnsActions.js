import { fetch_post } from '../services/fetch'

import * as actionTypes from '../constants/actionTypes';

import * as fetchActions from './FetchActioins'

import { banks } from '../data/banks'

export function getBanks() {
  return (dispatch) => {
    dispatch(fetchActions.getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(fetchActions.getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(updateBanks(banks))
        }
      })
      .catch(function(err) {
        dispatch(fetchActions.getDataFailure())
      })
  }
}
export function updateBanks(banks) {
  return {
    type: actionTypes.UPDATE_BANKS,
    banks: banks
  }
}
export function addTransaction(transaction) {
  return {
    type: actionTypes.ADD_TRANSACTIONS,
    transaction: transaction
  }
}

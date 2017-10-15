import * as actionTypes from '../constants/actionTypes';

import { getBanks } from '../actions/BanksActions'
import { getTransactions } from '../actions/TrnsActions'
import * as fetchActions from './FetchActioins'

import { fetch_post } from '../services/fetch'
import { banks } from '../data/banks'
import { transactions } from '../data/transactions'
import { updateBanks } from './BanksActions'
import { updateTransactions } from './TrnsActions'

export const addTransaction = transaction => ({
  type: actionTypes.ADD_TRANSACTIONS,
  transaction
})
export function getTransactionsData(){
  return (dispatch) => {
    dispatch(fetchActions.getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(fetchActions.getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(updateBanks(banks))
        }
      })
      .then((banks) => {
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
      })
      .catch(function(err) {
        dispatch(fetchActions.getDataFailure())
      })
  }
}

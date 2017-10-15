import { fetch_post } from '../services/fetch'

import * as actionTypes from '../constants/actionTypes';

import { getData, getDataSuccess, getDataFailure } from './FetchActioins'

import { banks } from '../data/banks'

export function getBanks() {
  return (dispatch) => {
    dispatch(getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(updateBanks(banks))
        }
      })
      .catch(function(err) {
        dispatch(getDataFailure())
      })
  }
}
export const updateBanks = banks => ({
  type: actionTypes.UPDATE_BANKS,
  banks
})

import * as actionTypes from '../constants/actionTypes';

export function getData() {
  return {
    type: actionTypes.FETCHING_DATA
  }
}
export function getDataSuccess() {
  return {
    type: actionTypes.FETCHING_DATA_SUCCESS
  }
}
export function getDataFailure() {
  return {
    type: actionTypes.FETCHING_DATA_FAILURE
  }
}

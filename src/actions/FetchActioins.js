import * as actionTypes from "../constants/actionTypes";

export const getData = () => ({
  type: actionTypes.FETCHING_DATA
})
export const getDataSuccess = () => ({
  type: actionTypes.FETCHING_DATA_SUCCESS
})
export const getDataFailure = () => ({
  type: actionTypes.FETCHING_DATA_FAILURE
})

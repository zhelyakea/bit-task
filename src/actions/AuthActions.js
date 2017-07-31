import { fetch_post } from '../services/fetch'

import * as actionTypes from '../constants/actionTypes';

import * as fetchActions from './FetchActioins'
import * as routeActions from './RouteActions'


export function getAuth(query) {
  return (dispatch) => {
    dispatch(fetchActions.getData())
    fetch_post(`http://httpbin.org/ip`)
      .then((data) => {
        dispatch(fetchActions.getDataSuccess())
        if(data.hasOwnProperty('origin')){
          dispatch(authentification(true))
          dispatch(routeActions.setRoute('/newtransactions'))
        }
      })
      .catch(function(err) {
        dispatch(fetchActions.getDataFailure())
      })
  }
}
export function authentification(auth) {
  return {
    type: actionTypes.SET_AUTH,
    auth: auth
  }
}

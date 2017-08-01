import { hashHistory } from 'react-router'

import * as authActions from './AuthActions'

export function toBack() {
  return (dispatch) => {
    dispatch(authActions.authentification('', '', false))
    dispatch(setRoute('/'))
  }
}
export function setRoute(place_to) {
  return () => {
    hashHistory.push(place_to)
  }
}

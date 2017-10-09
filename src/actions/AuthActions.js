import { fetch_post } from "../services/fetch";

import * as actionTypes from "../constants/actionTypes";

import { getData, getDataSuccess, getDataFailure } from "./FetchActioins";
import { setRoute } from "./RouteActions";

export function getAuth(login, pass) {
  return dispatch => {
    dispatch(getData());
    fetch_post(`http://httpbin.org/ip`)
      .then(data => {
        dispatch(getDataSuccess());
        if (data.hasOwnProperty("origin")) {
          dispatch(authentification(login, pass, true));
          dispatch(setRoute("/newtransactions"));
        }
      })
      .catch(function(err) {
        dispatch(getDataFailure());
      });
  };
}
export function authentification(login, pass, state) {
  return {
    type: actionTypes.SET_AUTH,
    state: state,
    login: login,
    pass: pass
  };
}

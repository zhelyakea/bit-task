import { hashHistory } from "react-router";

import { authentification } from "./AuthActions";

export function toBack() {
  return dispatch => {
    dispatch(authentification("", "", false));
    dispatch(setRoute("/"));
  };
}
export function setRoute(place_to) {
  return () => {
    hashHistory.push(place_to);
  };
}

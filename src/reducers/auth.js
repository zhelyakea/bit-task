import * as actionTypes from "../constants/actionTypes";
const auth = {
  state: false,
  login: "",
  pass: ""
};
export default function authReducer(state = auth, action) {
  const newstate = { ...state };
  switch (action.type) {
    case actionTypes.SET_AUTH:
      newstate.state = action.state;
      newstate.login = action.login;
      newstate.pass = action.pass;
      return newstate;
    default:
      return state;
  }
}

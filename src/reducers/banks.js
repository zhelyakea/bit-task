import * as actionTypes from "../constants/actionTypes";

export default function banksReducer(state = new Map(), action) {
  const newstate = new Map();
  switch (action.type) {
    case actionTypes.UPDATE_BANKS:
      const banks = action.banks;
      banks.forEach((key, index) => {
        let bank = { ...banks[index] };
        let id = banks[index].id;
        newstate.set(banks[index].id, { ...banks[index] });
      });
      return newstate;
    default:
      return state;
  }
}

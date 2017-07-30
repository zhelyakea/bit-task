
import * as actionTypes from '../constants/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

const initial = {
	personal: [],
	index: {},
	search_index: {},
	type_sort: true
}

export default function personalReduce(state = initial, action) {
	const newstate = {...state}
	switch (action.type) {
		case actionTypes.UPDATE_PERSONAL:

			let personal = action.payload
				newstate.search_index = {}
				personal.forEach((key, index) => {
					if(!newstate.index.hasOwnProperty(personal[index].id)){
						newstate.index[personal[index].id] = index
						newstate.personal[index] = {...personal[index]}
					}
				})
	    return newstate

		case actionTypes.SORT_BY_DATE:
			console.log(action.payload)
			let personal_to_sort = action.payload.personal
			let type_sort = action.payload.type_sort
			newstate.index = {}
			newstate.search_index = {}
			let personal_sort = personal_to_sort.sort((prev, curr) => {
				const prev_date = new Date(prev.birth_date)
				const curr_date = new Date(curr.birth_date)
				if (prev_date > curr_date) return type_sort ? 1 : -1
				if (prev_date < curr_date) return type_sort ? -1 : 1
				return 0;
			})
			newstate.personal = [...personal_sort]
			newstate.personal.forEach((key, index) => {
					newstate.index[newstate.personal[index].id] = index
			})
			newstate.type_sort = !newstate.type_sort
    	return newstate

		case actionTypes.SEARCH_PERSONAL:

			let search_personal = action.payload
			newstate.search_index = {}
			search_personal.forEach((key, index) => {

				let search_personal_index = search_personal[index]
				let search_personal_id = search_personal[index].id

				if((newstate.index).hasOwnProperty(search_personal_id)){
					 newstate.search_index[search_personal_id] = newstate.index[search_personal_id]
				 }
			})
	    return newstate

	case actionTypes.CHANGE_PERSONAL_DATA:

		let index = action.payload.index
		let data = action.payload.data
		Object.keys(data).forEach(key => {
			newstate.personal[index][key] = data[key]
		})
		return newstate

	case actionTypes.DELETE_PERSON:

		newstate.personal.splice(action.payload, 1)
		newstate.index = {}
		newstate.search_index = {}
		newstate.personal.forEach((key, index) => {
			newstate.index[newstate.personal[index].id] = index
		})
		return newstate

	case REHYDRATE:

	  var incoming = action.payload.myReducer
	  if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
  return state
    default:
    	return newstate
	}
}

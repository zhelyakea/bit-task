
import * as actionTypes from '../constants/actionTypes';
import {REHYDRATE} from 'redux-persist/constants'

const initial = {
	posts: [],
	index: {}
}

export default function personalReduce(state = initial, action) {
	const newstate = {...state}
	const posts = action.payload
	switch (action.type) {
		case actionTypes.UPDATE_POSTS:
			posts.forEach((key, index) => {
				newstate.index[posts[index].id] = index
			})
			newstate.posts = [...posts]
	    return newstate
	case REHYDRATE:
	  var incoming = action.payload.myReducer
	  if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
  return state
    default:
    	return newstate
	}
}

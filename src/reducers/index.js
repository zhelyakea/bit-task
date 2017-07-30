import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import personal from './personal'
import posts from './posts'
import edit from './edit'

export default combineReducers({
  personal,
  posts,
  edit,
  routing: routerReducer
})

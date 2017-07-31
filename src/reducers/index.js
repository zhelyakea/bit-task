import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import transactions from './transactions'
import banks from './banks'
import auth from './auth'
import editable from './editable'

export default combineReducers({
  transactions,
  banks,
  auth,
  editable,
  routing: routerReducer
})

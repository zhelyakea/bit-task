import { fetch_post } from '../services/fetch'

import * as actions from './'

export function personalSearch(text) {
  return (dispatch, getState) => {
    dispatch(actions.getData())
    fetch_post(`http://avengers.view.indev-group.eu/test_api/staff/?query=${text}`)
      .then((data) => {
        dispatch(actions.getDataSuccess())
        dispatch(actions.searchPersonal(data))
        if(Object.values(getState().personal.search_index).length > 0) {
          const index = Object.values(getState().personal.search_index)[0]
          console.log(index)
          dispatch(actions.setEditPerson(index))
        }
      })
      .catch(function(err) {
      })
  }
}

export function personal_fetch(query) {
  return (dispatch, getState) => {
    dispatch(actions.getData())
    switch(query){
      case 'posts':
        fetch_post('http://avengers.view.indev-group.eu/test_api/posts/')
          .then((data) => {
            dispatch(actions.getDataSuccess())
            dispatch(actions.updatePosts(data))
          })
          .then((data) => {
            dispatch(personal_fetch('staff'))
          })
          .catch(function(err) {
          })
        break
      case 'staff':
        fetch_post('http://avengers.view.indev-group.eu/test_api/staff/')
          .then((data) => {
            dispatch(actions.getDataSuccess())
            dispatch(actions.updatePersonal(data))
            const index = Object.values(getState().personal.index)[0]
            dispatch(actions.setEditPerson(index))
          })
          .catch(function(err) {
          })
        break
    }
  }
}

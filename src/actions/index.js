
import * as actionTypes from '../constants/actionTypes';

export function getData() {
  return {
    type: actionTypes.FETCHING_DATA
  }
}
export function getDataSuccess(data) {
  return {
    type: actionTypes.FETCHING_DATA_SUCCESS,
    data,
  }
}
export function getDataFailure() {
  return {
    type: actionTypes.FETCHING_DATA_FAILURE
  }
}
export function updatePersonal(personal) {
  return {
    type: actionTypes.UPDATE_PERSONAL,
    payload: personal
  }
}
export function updatePosts(posts) {
  return {
    type: actionTypes.UPDATE_POSTS,
    payload: posts
  }
}
export function setEditPerson(index) {
  return  {
    type: actionTypes.SET_EDIT_PERSON,
    payload: index
  }
}
export function changePersonalData(data) {
  return {
    type: actionTypes.CHANGE_PERSONAL_DATA,
    payload: data
  }
}
export function searchPersonal(data) {
  return {
    type: actionTypes.SEARCH_PERSONAL,
    payload: data
  }
}
export function sortByDate() {
  return (dispatch, getState) => {
    const personal = getState().personal
    dispatch(sort(personal))
    dispatch( setEditPerson(0))
  }
}

export function sort(personal) {
  return {
    type: actionTypes.SORT_BY_DATE,
    payload: personal
  }
}
export function deletePerson(index) {
  return  {
    type: actionTypes.DELETE_PERSON,
    payload: index
  }
}
export function deleteAndChangeEdit(index){
  return (dispatch, getState) => {
    dispatch(deletePerson(index))
    dispatch(searchPersonal([]))
    dispatch(setEditPerson(0))
  }
}

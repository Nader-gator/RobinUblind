export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"
export const CLEAR_SEARCH = "CLEAR_SEARCH"
import {searchServer} from "../util/search_utl"


export const search = (searchletters) => dispatch => {
  return searchServer(searchletters).then(response => {
    return dispatch(receiveSearchResults(response))
  })
}


export const receiveSearchResults = (results) => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    results
  }
}

export const clearSearch = () => dispatch => {
  return dispatch(cleanSearch())
}

export const cleanSearch = () => {
  return {
    type: CLEAR_SEARCH,
  }
}
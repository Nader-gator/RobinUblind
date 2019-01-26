import {RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH} from "../../actions/search_actions"



export default (state= {}, action) => {
  Object.freeze(state)
  
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return action.results
    case CLEAR_SEARCH:
      return {}
    default:
      return state
  }
}
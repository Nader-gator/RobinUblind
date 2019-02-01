import {RECEIVE_NEWS,START_RECEIVE_NEWS} from "../../actions/news_actions" 


export default (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_NEWS:
      return action.articles
    case START_RECEIVE_NEWS:
      return {}
    default:
      return state
  }
}
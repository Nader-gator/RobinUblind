import {RECEIVE_NEWS} from "../../actions/news_actions"


export default (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_NEWS:
      return action.articles
    default:
      return state
  }
}
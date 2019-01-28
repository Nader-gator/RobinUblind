import { RECIEVE_WATCHLIST } from "../../actions/watchlist_actions";

export default (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECIEVE_WATCHLIST:
      return action.watchlist
    default:
      return state
  }
}
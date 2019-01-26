import { RECEIVE_CURRENT_STOCK } from "../../actions/stocks_actions";


export default (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CURRENT_STOCK:
        return action.stock
    default:
      return state
  }
}
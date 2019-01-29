import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../../actions/session_actions"
import { RECEIVE_TRANSACTION_STATUS } from "../../actions/transaction_actions";


export default (state= null, action ) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user
    case LOGOUT_CURRENT_USER:
      return null
    case RECEIVE_TRANSACTION_STATUS:
      return Object.assign({},state,{bankroll: action.response.newBankroll})
    default:
    return state
  }
}
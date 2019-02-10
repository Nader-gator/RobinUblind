import { RECEIVE_TRANSACTIONS_MAIN, CLEAR_PORTFOLIO} from '../../actions/transaction_actions'




export default (state = [], action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_TRANSACTIONS_MAIN:
      return action.transactions
    case CLEAR_PORTFOLIO:
      return []
    default:
      return state
  }
}
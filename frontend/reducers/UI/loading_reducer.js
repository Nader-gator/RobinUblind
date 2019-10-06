import { RECEIVE_NEWS, START_RECEIVE_NEWS} from '../../actions/news_actions'
import { START_RECEIVE_CURRENT_STOCK, RECEIVE_CURRENT_STOCK, RECEIVE_STOCK_DATA  } from '../../actions/stocks_actions';

import { START_RECEIVE_TRANSACTIONS, RECEIVE_TRANSACTIONS, RECEIVE_TRANSACTIONS_MAIN } from '../../actions/transaction_actions'

const initialState = {
  newsLoading: true,
  stockLoading: true,
  transactionLoading: true
}

export default (state =initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case START_RECEIVE_NEWS:
      return Object.assign({}, state, { newsLoading: true })
    case RECEIVE_NEWS:
      return Object.assign({}, state, { newsLoading: false})
    case START_RECEIVE_CURRENT_STOCK:
      return Object.assign({}, state, { stockLoading: true })
    case RECEIVE_CURRENT_STOCK:
      return Object.assign({}, state, { stockLoading: false})
    case START_RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, { transactionLoading: true })
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, state, { transactionLoading: false })
    case RECEIVE_TRANSACTIONS_MAIN:
      return Object.assign({}, state, { transactionLoading: false })
    default:
      return state
  }
}

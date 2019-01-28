import { RECEIVE_STOCK_DATA } from "../../actions/stocks_actions";


export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STOCK_DATA:
      const newData = { 
        [action.stock.quote.symbol]: {quote: action.stock.quote.delayedPrice,
          chart: action.stock.chart
        }
      }
      return Object.assign({}, state, newData)
    default:
      return state
  }
}

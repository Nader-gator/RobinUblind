import { combineReducers } from 'redux'
import loading from './loading_reducer'
import searchedStocks from './searched_stocks_reducer'
import transactionStatus from './transactions_status'
import chartData from './chart_reducer'
export default combineReducers({
  loading,
  searchedStocks,
  transactionStatus,
  chartData
})

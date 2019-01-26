import { combineReducers } from 'redux'
import loading from './loading_reducer'
import searchedStocks from './searched_stocks_reducer'

export default combineReducers({
  loading,
  searchedStocks
})

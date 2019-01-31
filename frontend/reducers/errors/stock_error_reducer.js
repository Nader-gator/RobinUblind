import {
  RECEIVE_STOCK_ERRORS, 
  RECEIVE_CURRENT_STOCK
,RECEIVE_STOCK_DATA } from "../../actions/stocks_actions";





export default(state=[],action)=>{
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_STOCK_ERRORS:
      return action.errors
    case RECEIVE_CURRENT_STOCK:
      return []
    case RECEIVE_STOCK_DATA:
      return []
    default:
      return state
  }
}
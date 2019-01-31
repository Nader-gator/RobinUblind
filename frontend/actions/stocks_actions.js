import * as StockUtil from '../util/stocks_util'


export const RECEIVE_CURRENT_STOCK = "RECEIVE_CURRENT_STOCK"
export const START_RECEIVE_CURRENT_STOCK = "START_RECEIVE_CURRENT_STOCK"
export const RECEIVE_STOCK_DATA = "RECEIVE_STOCK_DATA"
export const RECEIVE_STOCK_ERRORS = "RECEIVE_STOCK_ERRORS"


export const fetchCurrentStock = (code,range,option = true) => dispatch => {
  
  if (option){
    dispatch(startReceiveCurrentStock())
  }
  return StockUtil.getStock(code,range).then(
    data=>{ return dispatch(receiveCurrentStock(data))},
    err=>{
      return dispatch(receiveStockError(err.responseText))}
    )
}


export const fetchStockData = (code) => dispatch => {
  return StockUtil.getSingleStockQoute(code).then(
    data=>{return dispatch(receiveStockData(data))}),
    err => {
      return dispatch(receiveStockError(err.responseText)) }

}

export const receiveStockData = (stock) => {
  return {
    type: RECEIVE_STOCK_DATA,
    stock
  }
}

export const receiveCurrentStock= (stock) =>{
  return {
    type: RECEIVE_CURRENT_STOCK,
    stock
  }
}
export const startReceiveCurrentStock= () =>{
  return {
    type: START_RECEIVE_CURRENT_STOCK,
  }
}

export const receiveStockError=(errors)=>{
  return {
    type: RECEIVE_STOCK_ERRORS,
    errors
  }
}
import * as StockUtil from '../util/stocks_util'


export const RECEIVE_CURRENT_STOCK = "RECEIVE_CURRENT_STOCK"
export const START_RECEIVE_CURRENT_STOCK = "START_RECEIVE_CURRENT_STOCK"


export const fetchCurrentStock = (code,range) => dispatch => {
  dispatch(startReceiveCurrentStock())
  return StockUtil.getStock(code,range).then(data=>{
    return dispatch(receiveCurrentStock(data))
  })
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
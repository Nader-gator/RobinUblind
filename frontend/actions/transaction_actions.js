import * as TransUtil from '../util/transaction_util'

export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS"
export const RECEIVE_TRANSACTIONS_MAIN = "RECEIVE_TRANSACTIONS_MAIN"
export const START_RECEIVE_TRANSACTIONS ="START_RECEIVE_TRANSACTIONS"
export const RECEIVE_TRANSACTION_STATUS = "RECEIVE_TRANSACTION_STATUS"
export const CLEAR_PORTFOLIO = "CLEAR_PORTFOLIO"

export const fetchTransactions = (userId,date,option=true) => dispatch => {
  if (option){
    dispatch(startReciveTransactions());
  }
  return TransUtil.getTransactions(userId,date).then(transactions => {
    return dispatch(receiveTransactions(transactions))
  })
}
export const fetchTransactionsMain = (userId,date,option=true) => dispatch => {
  if (option){
    dispatch(startReciveTransactions());
  }
  return TransUtil.getTransactions(userId,date).then(transactions => {
    return dispatch(receiveTransactionsMain(transactions))
  })
}

export const startReciveTransactions = () => {
  return {
    type: START_RECEIVE_TRANSACTIONS
  }
}

export const receiveTransactions = (transactions) => {
  return {
    type: RECEIVE_TRANSACTIONS,
    transactions
  }
}

export const receiveTransactionsMain = (transactions) => {
  return {
    type: RECEIVE_TRANSACTIONS_MAIN,
    transactions
  }
}

export const sendTransactions = (userId,data,date) => dispatch => {
  return TransUtil.postTransaction(userId,data,date).then(response=>{
    return dispatch(receiveTransactionStatus(response))
  })
}

export const receiveTransactionStatus = (response) => {
  return {
    type: RECEIVE_TRANSACTION_STATUS,
    response
  }
}

export const clearPortfolio = ()=>{
  return {
    type: CLEAR_PORTFOLIO
  }
}
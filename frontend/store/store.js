import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import logger from "redux-logger"

import RootReducer from "../reducers/root_reducer"

export default (defaultState={}) => {
  return createStore(
    RootReducer,
    defaultState,
    applyMiddleware(thunk)
  )
}
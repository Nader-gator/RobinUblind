import {combineReducers} from 'redux'
import session from './session_error_reducer'
import stock from "./stock_error_reducer"
export default combineReducers({
  session,
  stock
})


// Entities: 
        //Stocks
        //user
//UI:
      //loading
      //purchase pending (might not need this one)
//errors
      //session
      //purchase
      //sale
//session
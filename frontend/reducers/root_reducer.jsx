import {combineReducers} from "redux"
import errors from "./errors/root_error_reducer"
import session from "./session/session_reducer"
import entities from "./entities/root_entities_reducer"
export default combineReducers({
  entities,
  errors,
  session
})

// Entities: 
        //Stocks
        //user
        //purchasehistory
        //watchlist
//UI:
      //loading
      //purchase pending (might not need this one)
//errors
      //session
      //purchase
      //sale
//session
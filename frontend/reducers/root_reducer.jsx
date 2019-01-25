import {combineReducers} from "redux"
import errors from "./errors/root_error_reducer"
import session from "./session/session_reducer"
import entities from "./entities/root_entities_reducer"
import ui from "./UI/root_ui_reducer"
export default combineReducers({
  entities,
  errors,
  session,
  ui
})


// Entities: 
        //Stocks
        //user
        //purchasehistory
        //watchlist
        //news
//UI:
      //loading
      //purchase pending (might not need this one)
//errors
      //session
      //purchase
      //sale
//session
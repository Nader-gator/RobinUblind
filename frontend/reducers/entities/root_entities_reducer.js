import {combineReducers} from 'redux'
import user from './user_reducer'
import news from "./news_reducer"
import currentStock from"./current_stock_reducer"

export default combineReducers({
  user,
  news,
  currentStock
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
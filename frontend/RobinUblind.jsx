import React from "react"
import ReactDOM from 'react-dom'

import Root from './components/root'
import configureStore from './store/store'

//test
import { fetchCurrentStock } from "./actions/stocks_actions";

//test

document.addEventListener("DOMContentLoaded", ()=>{
  const rootEl = document.getElementById("root")
  let store
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        user: window.currentUser
      },
      session: { id: window.currentUser.id }
    }

    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }

  
  //TEST
  window.state = store
  window.getstock = fetchCurrentStock

  //TEST
  
  ReactDOM.render(<Root store={store}/>, rootEl)
})
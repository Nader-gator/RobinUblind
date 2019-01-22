import React from "react"
import ReactDOM from 'react-dom'

import Root from './components/root'
import configureStore from './store/store'

//test

import * as Actions from './actions/session_actions' 
//test

document.addEventListener("DOMContentLoaded", ()=>{
  const rootEl = document.getElementById("root")
  const store = configureStore()
  
  //TEST
  window.state = store.getState
  window.dispatch = store.dispatch

  window.signup = Actions.signUp
  window.login = Actions.logIn
  window.signout = Actions.logOut
  //TEST
  
  ReactDOM.render(<Root store={store}/>, rootEl)
})



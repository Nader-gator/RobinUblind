import * as APIutil from '../util/session_api_util'
export const RECEIVE_CURRENT_USER ="RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER ="LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS ="RECEIVE_SESSION_ERRORS"
export const REMOVE_SESSION_ERRORS ="RECEIVE_SESSION_ERRORS"

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  }
}

export const clearError = () => dispatch => {
  return APIutil.logout().then(user => {
    return dispatch(removeErrors())
  })
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}


export const signUp = (user) => dispatch => {
  return APIutil.newUser(user).then(user =>{
    return dispatch(receiveUser(user))
  },
  err => {return dispatch(receiveErrors(err.responseJSON))}
  
  )
}

export const logIn = (user) => dispatch => {
  return APIutil.logIn(user).then(user=> {
    return dispatch(receiveUser(user))
  },
  err => {return dispatch(receiveErrors(err.responseJSON))}
  )
}

export const logOut = () => dispatch => {
  return APIutil.logout().then(user => {
    return dispatch(logoutCurrentUser())
  })
}


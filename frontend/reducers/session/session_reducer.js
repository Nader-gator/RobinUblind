import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../../actions/session_actions"

const nullUser = {
  id: null
}

Object.freeze(nullUser)



export default (state = nullUser, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id}
    case LOGOUT_CURRENT_USER:
      return nullUser
    default:
      return state
  }
}
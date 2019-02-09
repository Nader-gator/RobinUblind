import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { logIn, clearError } from '../../actions/session_actions'
import SessionForm from './session_form'


const mapStateToProps = ({errors:{session}}) => {
  return {
    errors: session,
    formType: "Log In",
    navLink: <Link className="change-form" to='/signup'>Sign Up Instead</Link>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (user) => dispatch(logIn(user)),
    resetErrors: () => dispatch(clearError()),
    demoUser: () => dispatch(logIn({ email: "demouser@demo.com", password: "starwars" })),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)

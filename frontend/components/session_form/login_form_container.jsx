import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { logIn } from '../../actions/session_actions'
import SessionForm from './session_form'


const mapStateToProps = ({errors:{session}}) => {
  return {
    errors: session,
    formType: "Log In",
    navLink: <Link to='/signup'>Sign Up Instead</Link>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (user) => dispatch(logIn(user))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)

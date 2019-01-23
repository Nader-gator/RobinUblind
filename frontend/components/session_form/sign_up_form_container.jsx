import { connect } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'
import { signUp } from "../../actions/session_actions";
import SessionForm from './session_form'


const mapStateToProps = ({ errors: { session } }) => {
  return {
    errors: session,
    formType: "Sign Up",
    navLink: <Link className="change-form" to='/login'>Sign In Instead</Link>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formAction: (user) => dispatch(signUp(user))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SessionForm)
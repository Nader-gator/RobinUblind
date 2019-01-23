import {connect} from 'react-redux'

import { logOut, logIn } from "../../actions/session_actions";
import header from './header'

const mapStateToProps = ({entities:{user}}) => {
  return {
    currentUser: user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOut()),
    demoUser: () => dispatch(logIn({ email: "demouser@demo.com", password: "starwars"}))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(header)
import {connect} from 'react-redux'

import { logOut } from "./../../actions/session_actions";
import greeting from './greeting'

const mapStateToProps = ({entities:{user}}) => {
  return {
    currentUser: user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(greeting)
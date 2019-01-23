import {connect} from 'react-redux'

import { logOut } from "../../actions/session_actions";
import header from './header'

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

export default connect(mapStateToProps,mapDispatchToProps)(header)
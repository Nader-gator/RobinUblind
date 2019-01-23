import {connect} from 'react-redux'

import {  } from "../../actions/session_actions";
import Main from './main_page'

const mapStateToProps = ({entities:{user}}) => {
  return {
    currentUser: user
  }
}


const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
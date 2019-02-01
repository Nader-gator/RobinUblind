import {connect} from 'react-redux'

import { logOut, logIn } from "../../actions/session_actions";
import header from './header'
import { startReceiveNews } from '../../actions/news_actions';

const mapStateToProps = ({entities:{user}}) => {
  return {
    currentUser: user
  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logOut()),
    demoUser: () => dispatch(logIn({ email: "demouser@demo.com", password: "starwars"})),
    resetNews: ()=> dispatch(startReceiveNews())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(header)
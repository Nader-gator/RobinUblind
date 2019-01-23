import {connect} from 'react-redux'


import body from './body'

const mapStateToProps = ({entities:{user}}) => {
  return {
    currentUser: user
  }
}


export default connect(mapStateToProps)(body)
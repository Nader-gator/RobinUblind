import React from 'react'
import { addToWatchlist, removeFromWatchlist } from '../../util/watchlist_util'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { fetchWatchlist } from "../../actions/watchlist_actions"


class AddWatchlistButton extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    addToWatchlist(this.props.currentUser.id, this.props.match.params.stockCode).then(() => this.props.fetchWatchlist(this.props.user.id) )
    
  }


  componentWillMount() {
    this.props.getWatchlist(this.props.currentUser.id)
  }


  render() {
    return (<button
      id="watchlist-button"
      className="watch-list-button lsticky"
      onClick={this.handleSubmit}
    >Add to Watchlist</button>)
  }

}



const mapStateToProps = ({ entities: { user, watchlist } }) => {
  return {
    currentUser: user,
    watchlist
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getWatchlist: (id) => dispatch(fetchWatchlist(id)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddWatchlistButton))
import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './search_bar'
import {search, clearSearch} from '../../actions/search_actions'



const mapStateToProps = ({ ui: { searchedStocks } }) => {
  return {
    stocks: searchedStocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStocks: (searchletters) => dispatch(search(searchletters)),
    clearSearch: () => dispatch(clearSearch())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
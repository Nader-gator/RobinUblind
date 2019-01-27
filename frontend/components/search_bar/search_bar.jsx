import React from 'react'
import {Link} from 'react-router-dom'
class SearchBar extends React.Component {
  
  
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {searchletters: "", stocks: this.props.stocks }
  }
  
  
  handleChange(e) {
    this.setState({ searchletters: e.target.value},()=>{
      if (this.state.searchletters.length > 1){
        this.props.fetchStocks(this.state.searchletters)
      } else {
        this.props.clearSearch()
      }
    })

  }

  content() {
    return this.props.stocks.map((el,idx)=>{
      return (
        <Link key={idx} to={el.nasdaq_code}>
          <p>{el.nasdaq_code}: {el.company_name}</p>
        </Link>
      )
    })
  }

  render() {

    if (Object.keys(this.props.stocks).length === 0) {
      return (<div className="search-bar">
        <input onChange={this.handleChange} type="text" placeholder=" 🔍 Search" />
        <div className="search-results">
          <ul>
          </ul>
        </div>
      </div>)
    } else {
  return (
  <div className="search-bar">
    <input onChange={this.handleChange} type="text" placeholder=" 🔍 Search" />
    <div className="search-results">
      <ul>
        {this.content()}
      </ul>
    </div>
  </div>
  )}

 }
}

export default SearchBar
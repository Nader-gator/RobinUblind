import { connect } from 'react-redux'
import React from 'react'
import { getNews } from "../../actions/news_actions"
import StockShowPage from './stock_show'
import { clearSearch } from '../../actions/search_actions';
import {fetchCurrentStock} from "../../actions/stocks_actions"
import { fetchWatchlist } from '../../actions/watchlist_actions';
import { fetchTransactions, sendTransactions } from '../../actions/transaction_actions'

class StockShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getNews(this.props.match.params.stockCode);
    this.props.fetchCurrentStock(this.props.match.params.stockCode,"1y")
    this.props.clearSearch()
  }


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.stockCode != this.props.match.params.stockCode) {
      this.props.getNews(this.props.match.params.stockCode);
      this.props.clearSearch()
      this.props.fetchCurrentStock(this.props.match.params.stockCode,"1y")
    }
  }

  news() {

    if (Object.keys(this.props.news).length === 0) {
      return null
    }
    const news = Object.values(this.props.news).map((el, idx) => {
      return (
        <a href={el.url} key={idx}>
          <img src={el.urlToImage} />
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </a>
      )
    })

    return news
  }



  render() {
    return (
    <StockShowPage 
      user={this.props.currentUser} 
      news={this.news()} 
      stock={this.props.stock} 
      fetchWatchlist={this.props.fetchWatchlist} 
      loading={this.props.loading} 
      watchlist={this.props.watchlist} 
      fetchCurrentStock={this.props.fetchCurrentStock} 
      fetchTransactions={() => this.props.fetchTransactions(this.props.currentUser.id,"now")} 
      sendTransaction={(data)=>this.props.sendTransaction(this.props.currentUser.id,data)}
      transactions={this.props.transactions}
      transactionStatus={this.props.transactionStatus}
      />)
    }
  }




const mapStateToProps = ({ entities: { user, watchlist,transactions }, entities: { news, currentStock }, ui: { loading, transactionStatus} }) => {
  return {
    currentUser: user,
    news,
    stock: currentStock,
    loading,
    watchlist,
    transactionStatus,
    transactions
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getNews: (stock_code) => dispatch(getNews(stock_code)),
    clearSearch: () => dispatch(clearSearch()),
    fetchCurrentStock: (stockCode,range,option) => dispatch(fetchCurrentStock(stockCode,range,option)),
    fetchWatchlist: (id) => dispatch(fetchWatchlist(id)),
    fetchTransactions: (userId,date) => dispatch(fetchTransactions(userId,date)),
    sendTransaction: (userId,data,date) => dispatch(sendTransactions(userId,data,date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShow)
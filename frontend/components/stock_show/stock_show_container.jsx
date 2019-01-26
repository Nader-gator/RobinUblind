import { connect } from 'react-redux'
import React from 'react'
import { getNews } from "../../actions/news_actions"
import StockShowPage from './stock_show'
import { clearSearch } from '../../actions/search_actions';


class StockShow extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getNews(this.props.match.params.stockCode)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.stockCode != this.props.match.params.stockCode) {
      this.props.getNews(this.props.match.params.stockCode);
      this.props.clearSearch()
    }
  }

  content() {

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
    return (<StockShowPage news={this.content()}/>)
  }

}


const mapStateToProps = ({ entities: { user }, entities: { news }, ui: { loading } }) => {
  return {
    currentUser: user,
    news,
    loading: loading.newsLoading
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getNews: (stock_code) => dispatch(getNews(stock_code)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockShow)
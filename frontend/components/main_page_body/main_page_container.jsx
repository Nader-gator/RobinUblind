import {connect} from 'react-redux'
import React from 'react'
import { getNews } from "../../actions/news_actions"
import MainPage from './main_page'



class Main extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getNews()
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

    return <MainPage news={this.content()} loading={this.props.loaded} currentUser={this.props.currentUser}/>
  }

}


const mapStateToProps = ({entities:{user}, entities:{news}, ui:{loading}}) => {
  return {
    currentUser: user,
    news,
    loading: loading.newsLoading
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(getNews("stocks+finance+business"))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
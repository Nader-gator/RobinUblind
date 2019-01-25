import {connect} from 'react-redux'
import React from 'react'
import { getNews } from "../../actions/news_actions"
import MainPage from './main_page'




class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = {loaded: false}
  }
  async componentDidMount() {
    await this.props.getNews()
    this.setState({loaded: true})
  }

  content() {
  const news = Object.values(this.props.articles).map((el, idx) => {
  return (
        <Link id={idx} to={el.url} >
          <img src={el.urlToImage} />
          <h2>{el.title}</h2>
          <p>el.description</p>
        </Link>
      )
    })

    return news
  }

  render() {

    if (this.state.loaded) {
      return <MainPage articles={this.content()} currentUser={this.props.currentUser}/>
    } else {return null}
  }

}


const mapStateToProps = ({entities:{user}, entities:{articles}}) => {
  return {
    currentUser: user,
    articles
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getNews: () => dispatch(getNews('stock+market'))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)
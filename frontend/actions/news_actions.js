export const RECEIVE_NEWS = "RECEIVE_NEWS"
import NewsUtil from "../util/news_util_api"

export const getNews = (subject) => dispatch => {
  return NewsUtil(subject).then(response => {
    return dispatch(receiveNews(response.articles))
  })
}

export const receiveNews = (articles) => {
  return {
    type: RECEIVE_NEWS,
    articles
  }
}
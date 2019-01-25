export const RECEIVE_NEWS = "RECEIVE_NEWS"
export const START_RECEIVE_NEWS = "START_RECEIVE_NEWS"
import NewsUtil from "../util/news_util_api"

export const getNews = (subject) => dispatch => {
  dispatch(startReceiveNews());
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
export const startReceiveNews = () => {
  return {
    type: START_RECEIVE_NEWS,
  }
}
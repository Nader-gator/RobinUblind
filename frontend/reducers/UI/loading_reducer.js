import { RECEIVE_NEWS, START_RECEIVE_NEWS} from '../../actions/news_actions'

const initialState = {
  newsLoading: false
}

export default (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case START_RECEIVE_NEWS:
      return Object.assign({}, state, { newsLoading: true })
    case RECEIVE_NEWS:
      return Object.assign({}, state, { newsLoading: false})
    default:
      return state
  }
}
export const RECIEVE_WATCHLIST = "RECIEVE_WATCHLIST"
import { fetchWatchlistUtil } from '../util/watchlist_util'

export const fetchWatchlist = (id) => dispatch => {
  return fetchWatchlistUtil(id).then(watchlist => {
    dispatch(recieveWatchlist(watchlist))
  })
}

export const recieveWatchlist = (watchlist) => {
  return {
    type: RECIEVE_WATCHLIST,
    watchlist
  }
}
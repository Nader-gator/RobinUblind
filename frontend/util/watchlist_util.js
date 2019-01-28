export const fetchWatchlistUtil = (user_id) => {
  return $.ajax({
    method: "get",
    url: `/api/user/${user_id}/watchlist`
  })
}
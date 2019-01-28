export const fetchWatchlistUtil = (user_id) => {
  return $.ajax({
    method: "get",
    url: `/api/user/${user_id}/watchlist`
  })
}

export const addToWatchlist = (user_id,data) => {
  return $.ajax({
    method: "post",
    url: `/api/user/${user_id}/watchlist`,
    data: {company_code: data}
  })
}


export const removeFromWatchlist = (user_id, data) => {
  return $.ajax({
    method: "delete",
    url: `/api/user/${user_id}/watchlist`,
    data: {company_code: data}
  })
}
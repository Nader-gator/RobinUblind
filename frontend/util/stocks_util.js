//range = 1d,1m,3m,6m,1y
export const getStock = (nasdaqcode,range) => {
  return $.ajax({
    method: "get",
    url: `https://api.iextrading.com/1.0/stock/${nasdaqcode}/batch?types=quote,chart&range=${range}`
  })
}

export const getSingleStockQoute = (nasdaqcode) => {
  return $.ajax({
    method: "get",
    url: `https://api.iextrading.com/1.0/stock/${nasdaqcode}/batch?types=quote,chart&range=1d`
  })
}

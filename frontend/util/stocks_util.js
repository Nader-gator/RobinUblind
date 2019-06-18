//range = 1d,1m,3m,6m,1y
export const getStock = (nasdaqcode, range) => {
  return $.ajax({
    method: "get",
    url: `https://cloud.iexapis.com/stable/stock/${nasdaqcode}/batch?types=quote,chart&range=${range}&token=${
      window.key
    }`
  });
};

export const getSingleStockQoute = nasdaqcode => {
  let range = "1d";
  return $.ajax({
    method: "get",
    url: `https://cloud.iexapis.com/stable/stock/${nasdaqcode}/batch?types=quote,chart&range=${range}&token=${
      window.key
    }`
  });
};

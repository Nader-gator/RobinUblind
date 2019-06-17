//range = 1d,1m,3m,6m,1y
export const getStock = (nasdaqcode, range) => {
  return $.ajax({
    method: "get",
    url: `https://cloud.iexapis.com/stable/stock/${nasdaqcode}/batch?types=quote,chart&range=${range}&token=sk_6a01d5b7ffad46f1b4a2379c26ab58ff`
  });
};

export const getSingleStockQoute = nasdaqcode => {
  let range = "1d";
  return $.ajax({
    method: "get",
    url: `https://cloud.iexapis.com/stable/stock/${nasdaqcode}/batch?types=quote,chart&range=${range}&token=sk_6a01d5b7ffad46f1b4a2379c26ab58ff`
  });
};

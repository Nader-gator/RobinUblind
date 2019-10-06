//range = 1d,1m,3m,6m,1y
export const getStock = (nasdaqcode, range) => {
  return $.ajax({
    method: "get",
    url: "/api/stockchart",
    data: { stock_code: nasdaqcode, range: range }
  });
};

export const getSingleStockQoute = nasdaqcode => {
  let range = "1d";
  return $.ajax({
    method: "get",
    url: "/api/stockchart",
    data: { stock_code: nasdaqcode, range: range }
  });
};

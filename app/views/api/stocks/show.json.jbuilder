json.array! @stocks do |stock|
  json.partial! "api/stocks/stock", stock: stock
end
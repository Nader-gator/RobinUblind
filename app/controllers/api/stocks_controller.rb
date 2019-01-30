class Api::StocksController < ApplicationController
  def show

  searchletters = params[:searchletters]
  by_code = Stock.where("UPPER(nasdaq_code) LIKE UPPER('%#{searchletters}%')")
  by_name = Stock.where("UPPER(company_name) LIKE UPPER('%#{searchletters}%')")
  
  @stocks = by_code + by_name
  @stocks = @stocks.uniq
  @stock = @stocks[0..20]
  render "api/stocks/show"
  end
  
end
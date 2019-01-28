class Api::WatchlistsController < ApplicationController
  def show
    current_user = User.find_by(id: params[:user_id])

    @stocks = current_user.stocks
    render "api/stocks/show"
  end
  
  def create
    company_id = Stock.find_by_nasdaq_code(params[:company_code]).id
    user_id = params[:user_id]
    
    Watchlist.create!(stock_id: company_id,user_id: user_id)
  end

  def destroy
    company_id = Stock.find_by_nasdaq_code(params[:company_code]).id
    user_id = params[:user_id]
    watchlist = Watchlist.find_by(stock_id: company_id, user_id: user_id)
    
    watchlist.destroy
  end

end

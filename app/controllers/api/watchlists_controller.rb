class Api::WatchlistsController < ApplicationController
  def show
    current_user = User.find_by(id: params[:user_id])

    @stocks = current_user.stocks
    render "api/stocks/show"
  end
  
end

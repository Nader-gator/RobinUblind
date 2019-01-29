class Api::TransactionsController < ApplicationController
  def show
    user = User.find_by(id: params[:user_id])

    debugger
    if params[:date]
      transactions = user.sorted_transactions_upto(params[:date])
    else 
      transactions = user.sorted_transactions
    end

    render json: transactions
  end

  def create
  end
  
end
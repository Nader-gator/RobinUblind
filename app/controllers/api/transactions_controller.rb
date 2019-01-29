class Api::TransactionsController < ApplicationController

  def show
    user = User.find_by(id: params[:user_id])

    
    if params[:date]
      transactions = user.sorted_transactions_upto(params[:date])
    else 
      transactions = user.sorted_transactions
    end

    render json: transactions
  end

  def create

  user = User.find_by(id: params[:user_id])
  transaction = Transaction.new

  if user.bankroll.to_i < ((params[:data][:amount].to_i * params[:data][:price].to_i))
    render json: {error: "insuffient funds"}
    rendered = true
  elsif params[:data][:amount].to_i == 0
    render json: {error: "purchase amount must be greater than zero"}
    rendered = true
  else
    transaction = Transaction.new(
    category: params[:data][:category],
    user_id: user.id,
    stock_id: Stock.find_by(nasdaq_code: params[:data][:stock_code]).id,
    price: params[:data][:price],
    amount: params[:data][:amount],
    )
    parsed = Date.strptime(params[:date], "%m/%d/%Y")
    transaction.date = parsed
  end

    if transaction.save
      new_bankroll = user.bankroll.to_i - ((params[:data][:amount].to_i * params[:data][:price].to_i))
      User.update(user.id, bankroll: new_bankroll)
      render json: {
        msg: "Purchase Successful for #{transaction.amount} shares of #{params[:data][:stock_code]}",
        newBankroll: new_bankroll
      } unless rendered
    else
      render json: {error: transaction.errors.full_messages} unless rendered
    end

  end

end
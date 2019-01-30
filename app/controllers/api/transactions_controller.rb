class Api::TransactionsController < ApplicationController

  def show
    user = User.find_by(id: params[:user_id])

    #welcome to hard-code city, population: Nader (trust me this was the fastest way)
    if params[:date] == '1w'
      transactions = [
         user.sorted_transactions_upto([Date.today - 7,Date.today - 6,
Date.today - 5,
Date.today - 4,
Date.today - 3,
Date.today - 2,
Date.today - 1]),
today: user.sorted_transactions
      ]
    elsif params[:date] == '1m'
      transactions = [
         user.sorted_transactions_upto([Date.today - 30,Date.today - 27,
Date.today - 24,
Date.today - 21,
Date.today - 18,
Date.today - 15,
Date.today - 11,
Date.today - 8,
Date.today - 5]),
        today: user.sorted_transactions
      ]
    elsif params[:date] == '3m'
      transactions = [
         user.sorted_transactions_upto([Date.today - 90,Date.today - 80,
Date.today - 70,
Date.today - 60,
Date.today - 50,
Date.today - 40,
Date.today - 30,
Date.today - 20,
Date.today - 10]),
        today: user.sorted_transactions
      ]
    elsif params[:date] == '1y'
      transactions = [
         user.sorted_transactions_upto([Date.today - 365,Date.today - 320,
Date.today - 275,
Date.today - 230,
Date.today - 185,
Date.today - 140,
Date.today - 95,
Date.today - 50,
Date.today - 5]),
        today: user.sorted_transactions
      ]
    # elsif params[:date] not to be user, maybe later for more features

    #   transactions = user.sorted_transactions_upto([params[:date]])
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
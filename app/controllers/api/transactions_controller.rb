class Api::TransactionsController < ApplicationController

  def show
    user = User.find_by(id: params[:user_id])

    if params[:date] == '1w'
      transactions = [
        user.sorted_transactions_upto(
          Transaction.get_time_map(7)
        ),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    elsif params[:date] == '1m'
      transactions = [
        user.sorted_transactions_upto(
          Transaction.get_time_map(30)
        ),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    elsif params[:date] == '3m'
      transactions = [
        user.sorted_transactions_upto(
          Transaction.get_time_map(90)
        ),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    elsif params[:date] == '1y' #App only uses this one, keeping the rest for future feature additions
      transactions = [
        user.sorted_transactions_upto(
          Transaction.get_time_map(365)
        ),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    # elsif params[:date] not to be user, maybe later for more features
    #   transactions = user.sorted_transactions_upto([params[:date]])
    elsif params[:date] == 'now'
      transactions = user.sorted_transactions
    end

    render json: transactions
  end

  def create
    
  user = current_user
  transaction = Transaction.new

  if user.bankroll.to_i < ((params[:data][:amount].to_i * params[:data][:price].to_i)) && params[:data][:category] == "buy"
    render json: {msg: "insuffient funds",newBankroll: user.bankroll}
    rendered = true
    
  elsif params[:data][:amount].to_i == 0 || params[:data][:amount] == ""
    render json: {msg: "amount must be greater than zero",newBankroll: user.bankroll}
    rendered = true
    
  elsif params[:data][:category] == "sell" && User.calculate_holding(user.positions_for_company(params[:data][:stock_code]))[:holding].to_i < params[:data][:amount].to_i
    render json: {msg: "Not enough shares of #{params[:data][:stock_code]}",newBankroll: user.bankroll}
    rendered = true

  elsif params[:data][:amount].to_i < 0
    
      render json: {msg: "Order canm\'t be negative",
      newBankroll: user.bankroll
      }
      rendered = true

  else
    cost = params[:data][:amount].to_i * params[:data][:price].to_i
    transaction = Transaction.new(
    category: params[:data][:category],
    user_id: user.id,
    stock_id: Stock.find_by(nasdaq_code: params[:data][:stock_code]).id,
    price: params[:data][:price],
    amount: params[:data][:amount],
    )
    if params[:data][:category] == "buy"
      transaction.bankroll = (user.bankroll.to_i - cost.to_i)
    elsif params[:data][:category] == "sell"
      transaction.bankroll = (user.bankroll.to_i + cost.to_i)
    end
    parsed = Date.strptime(params[:date], "%m/%d/%Y")
    transaction.date = parsed
  end

    if transaction.save
      if transaction[:category] == "buy"
        new_bankroll = user.bankroll.to_i - ((params[:data][:amount].to_i * params[:data][:price].to_i))
      elsif transaction[:category] == "sell"
        new_bankroll = user.bankroll.to_i + ((params[:data][:amount].to_i * params[:data][:price].to_i))
      end
      User.update(user.id, bankroll: new_bankroll)

      if transaction[:category] == "buy"
        render json: {
          msg: "Buy Successful for #{transaction.amount} shares of #{params[:data][:stock_code]}",
          newBankroll: new_bankroll} unless rendered
      elsif transaction[:category] == "sell"
        render json: {
          msg: "Sell Successful for #{transaction.amount} shares of #{params[:data][:stock_code]}",
          newBankroll: new_bankroll} unless rendered
      end
    else


      render json: {msg: transaction.errors.full_messages,newBankroll: user.bankroll} unless rendered
    end


  end

end
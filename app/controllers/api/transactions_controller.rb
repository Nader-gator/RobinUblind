class Api::TransactionsController < ApplicationController

  def show
    user = User.find_by(id: params[:user_id])

    #welcome to hard-code city, population: Nader (trust me this was the fastest way)
    if params[:date] == '1w'
      transactions = [
        user.sorted_transactions_upto([
        Date.today - 7,
        Date.today - 6,
        Date.today - 5,
        Date.today - 4,
        Date.today - 3,
        Date.today - 2,
        Date.today - 1,
        Date.today, 
        Date.today - 1,
        Date.today]),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    elsif params[:date] == '1m'
      transactions = [
        user.sorted_transactions_upto([
        Date.today - 30,
        Date.today - 27,
        Date.today - 24,
        Date.today - 21,
        Date.today - 18,
        Date.today - 15,
        Date.today - 11,
        Date.today - 8,
        Date.today - 5,
        Date.today, 
        Date.today - 1,
        Date.today]),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    elsif params[:date] == '3m'
      transactions = [
        user.sorted_transactions_upto([
        Date.today - 90,
        Date.today - 80,
        Date.today - 70,
        Date.today - 60,
        Date.today - 50,
        Date.today - 40,
        Date.today - 30,
        Date.today - 20,
        Date.today - 10,
        Date.today, 
        Date.today - 1,
        Date.today]),
      ]
      needed_transactions= transactions[0][0...-2]
      transactions = [needed_transactions, transactions[0][-2..-1]]
    elsif params[:date] == '1y'
      transactions = [
        user.sorted_transactions_upto([
        Date.today - 365,
        Date.today - 320,
        Date.today - 275,
        Date.today - 230,
        Date.today - 185,
        Date.today - 140,
        Date.today - 95,
        Date.today - 50,
        Date.today - 5,
        Date.today, 
        Date.today - 1,
        Date.today]),
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
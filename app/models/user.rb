class User < ApplicationRecord
  has_many :watchlist
  has_many :stocks,
    through: :watchlist,
    source: :stock
  has_many :transactions

  attr_reader :password

  validates :email, :password_digest, :session_token, :bankroll, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}

  after_initialize :ensure_session_token, :ensure_bankroll

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  # transaction methods begin here

  def purchases
    transactions.where(category: "buy")
  end

  def sales
    transactions.where(category: "sell")
  end

  def positions(date = nil)
    transaction_hash = {}
    transactions = self.transactions unless date
    transactions = self.transactions.includes(:stock).where("date <= ?", date) if date
    transactions.each do |transaction|
      transaction_hash[transaction.stock.nasdaq_code] = [] unless transaction_hash[transaction.stock.nasdaq_code]
      transaction_hash[transaction.stock.nasdaq_code] << transaction
    end
    transaction_hash
  end

  def positions_for_company(company_code)
    transaction_hash = {}
    stock = Stock.find_by_nasdaq_code(company_code)

    transactions = self.transactions.where(stock_id: stock.id)

    transactions.each do |transaction|
      transaction_hash[transaction.stock_id] = [] unless transaction_hash[transaction.stock_id]
      transaction_hash[transaction.stock_id] << transaction
    end
    transaction_hash
  end

  def closed_position?(array)
    count = 0
    array.each do |transaction|
      if transaction.category == "buy"
        count += transaction.amount
      elsif transaction.category == "sell"
        count -= transaction.amount
      end
    end

    return false if count > 0
    true
  end

  def self.calculate_holding(transaction_array)
    if transaction_array.class == Hash
      transaction_array = transaction_array.values.first
    end
    num_stocks = 0
    transaction_array.each do |hash|
      if hash[:category] == "buy"
        num_stocks += hash[:amount].to_i
      elsif hash[:category] == "sell"
        num_stocks -= hash[:amount].to_i
      end
    end

    {holding: num_stocks}
  end

  def sorted_transactions
    hash = {closed: {}, open: {}}

    positions.each do |code, transaction_array|
      if closed_position?(transaction_array)
        hash[:closed][code] = {data: transaction_array,
                               stats: User.calculate_holding(transaction_array),}
      else
        hash[:open][code] = {data: transaction_array,
                             stats: User.calculate_holding(transaction_array),}
      end
    end

    hash
  end

  def get_transactions
    transactions = self.transactions.includes(:stock).where("date <= ?", Date.today)
    transaction_hash = {}
    transactions.each do |transaction|
      transaction_hash[transaction.stock.nasdaq_code] = [] unless transaction_hash[transaction.stock.nasdaq_code]
      transaction_hash[transaction.stock.nasdaq_code] << transaction
    end
    # debugger
    transaction_hash
  end

  def positions_upto(date, transactions)
    # debugger
    transaction_hash = {}
    transactions.each do |symbol, array|
      transaction_hash[symbol] = array.select { |el|
        el.date < date
      }
    end
    transaction_hash
  end

  def sorted_transactions_upto(dates)
    result = []
    ::RestClient.log = Rails.logger
    company_list = transactions.includes(:stock).where("date <= ?", dates.last).map { |transaction| transaction.stock.nasdaq_code.downcase }.uniq
    price_info = RestClient::Request.new({
      method: "get",
      url: "https://cloud.iexapis.com/stable/stock/market/batch?symbols=#{company_list.join(",")}&types=quote,chart&"\
      "range=1y&token=#{ENV["key"]}",
      headers: {accept: :json, content_type: :json},
    }).execute { |response, request, result|
      JSON.parse response
    }
    transactions = get_transactions
    dates.each do |date|
      hash = {closed: {}, open: {}}
      positions_upto(date, transactions).each do |company_code, transaction_array|
        if closed_position?(transaction_array)
          hash[:closed][company_code] = {data: transaction_array,
                                         stats: User.calculate_holding(transaction_array),}
        else
          hash[:open][company_code] = {
            data: transaction_array,
            stats: User.calculate_holding(transaction_array).merge({
              price: find_price_at_date(price_info[company_code]["chart"], date),
            }),
          }
        end
      end
      hash[:date] = date
      hash[:bankroll] =
        find_bankroll_at_date(date,
          transactions.to_a.map { |el| el.last }.flatten)

      result << hash
    end
    result
  end

  def find_price_at_date(array, date)
    date = date.strftime("%Y%m%d")
    array.each do |item|
      if item["date"].delete("-") > date.to_s
        return item["close"]
      end
    end
    array.last["close"]
  end

  def find_bankroll_at_date(date, transactions_array)
    return bankroll if transactions_array.empty?
    transactions_array.select { |el| el.date < date }.max_by { |transaction| transaction.date }.bankroll
  end

  private

  def ensure_bankroll
    self.bankroll ||= "50000.00"
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(64)
  end
end

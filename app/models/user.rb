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
  
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  after_initialize :ensure_session_token, :ensure_bankroll

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    return user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  
  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

# transaction methods begin here

  def purchases
    self.transactions.where(category: 'buy')
  end

  def sales
    self.transactions.where(category: 'sell')
  end

  def positions(date = nil)
    transaction_hash = {}
    transactions = self.transactions
    transactions = self.transactions.where("date <= ?",date) if date
    transactions.each do |transaction|
      transaction_hash[transaction.stock_id] = [] unless transaction_hash[transaction.stock_id]
      transaction_hash[transaction.stock_id] << transaction
    end
    return transaction_hash
  end

  def positions_for_comapny(company_code)
    transaction_hash = {}
    stock = Stock.find_by_nasdaq_code(company_code)

    transactions = self.transactions.where(stock_id: stock.id)

    transactions.each do |transaction|
      transaction_hash[transaction.stock_id] = [] unless transaction_hash[transaction.stock_id]
      transaction_hash[transaction.stock_id] << transaction
    end
    return transaction_hash
  end

  def closed_position?(array)
    count = 0
    array.each do |transaction|
      if transaction.category == "buy"
        count += transaction.amount
      elsif transaction.category == 'sell'
        count -= transaction.amount
      end
    end

    return false if count > 0
    return true
    
  end


  def self.calculate_holding(transaction_array)
    num_stocks = 0

    transaction_array.each do |hash|
      if hash[:category] == 'buy'
        num_stocks += hash[:amount]
      elsif hash[:category] == 'sell'
        num_stocks -= hash[:amount]
      end
    end

    return {holding: num_stocks}
  end




  def sorted_transactions
    hash = {closed: {}, open: {}}

    self.positions.each do |code, transaction_array|
      if self.closed_position?(transaction_array)
        hash[:closed][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      else
        hash[:open][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      end
      
    end

    return hash
  end

  def sorted_transactions_upto(dates)
    price_info = {}
    result = []
    ::RestClient.log = Rails.logger
    
    dates.each do |date|
    hash = {closed: {}, open: {}}
    self.positions(date).each do |code, transaction_array|
      if self.closed_position?(transaction_array)
        hash[:closed][Stock.find_code(code)] = {data: transaction_array,
          stats: User.calculate_holding(transaction_array),
        }
      else
      price_info[code] ||= response = RestClient::Request.new({
      method: 'get',
      url: "https://api.iextrading.com/1.0/stock/#{Stock.find_code(code)}/batch?types=quote,chart&range=1y",
      headers: { :accept => :json, content_type: :json }
      }).execute do |response, request, result|
        JSON.parse response
      end


        hash[:open][Stock.find_code(code)] = {
          data: transaction_array,
          stats: User.calculate_holding(transaction_array).merge({
            price: self.find_price_at_date(price_info[code]["chart"],date)
          }),
        }

      end
      
    end
    hash[:date] = date

    result << hash
end
  return result
  end


  
  
  
  def find_price_at_date(array,date)
    date = date.strftime("%Y%m%d")
      array.each do |item|
        if item["date"].gsub('-', '') > (date.to_i - 3 ).to_s
          return item["close"]
        end
      end
      
  end
  
  
  
  # target = array.bsearch {|item| item["date"] < date }
  # target["close"]




  private

  def ensure_bankroll
    self.bankroll ||= "1000000.00"
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(64)
  end
end